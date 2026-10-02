import Helper from '@codeceptjs/helper';
import fs from 'fs';
import path from 'path';
import { container } from 'codeceptjs';

class PlaywrightVideoAllure extends Helper {

    constructor(config: any) {
        super(config);
    }

    async _attachVideo(test: any) {

        try {

            const allure = container.plugins('allure');

            if (!allure) {
                return;
            }

            const video =
                test.artifacts?.video ||
                test._retriedTest?.artifacts?.video;

            const trace =
                test.artifacts?.trace ||
                test._retriedTest?.artifacts?.trace;

            const screenshot =
                test.artifacts?.screenshot ||
                test._retriedTest?.artifacts?.screenshot;


            // ==============================
            // VIDEO
            // ==============================

            if (video && fs.existsSync(video)) {

                console.log(`✓ Attaching Video: ${video}`);

                allure.addAttachment(
                    'Execution Video',
                    fs.readFileSync(video),
                    'video/webm'
                );

            } else {

                const videoDir = './output/videos';

                if (fs.existsSync(videoDir)) {

                    const files = fs.readdirSync(videoDir);

                    const latestVideo = files
                        .filter(file => file.endsWith('.webm'))
                        .map(file => {

                            const videoPath = path.join(
                                videoDir,
                                file
                            );

                            return {
                                name: file,
                                path: videoPath,
                                time: fs
                                    .statSync(videoPath)
                                    .mtime
                                    .getTime()
                            };
                        })
                        .sort((a, b) => b.time - a.time)[0];


                    if (latestVideo) {

                        console.log(
                            `✓ Attaching Video (from dir): ${latestVideo.path}`
                        );

                        allure.addAttachment(
                            'Execution Video',
                            fs.readFileSync(latestVideo.path),
                            'video/webm'
                        );
                    }
                }
            }


            // ==============================
            // TRACE
            // ==============================

            if (trace && fs.existsSync(trace)) {

                console.log(`✓ Attaching Trace: ${trace}`);

                allure.addAttachment(
                    'Trace',
                    fs.readFileSync(trace),
                    'application/zip'
                );
            }


            // ==============================
            // SCREENSHOT
            // ==============================

            if (screenshot && fs.existsSync(screenshot)) {

                console.log(
                    `✓ Attaching Screenshot: ${screenshot}`
                );

                allure.addAttachment(
                    'Screenshot',
                    fs.readFileSync(screenshot),
                    'image/png'
                );
            }

        } catch (e) {

            console.error(
                'Error attaching to Allure:',
                e instanceof Error
                    ? e.message
                    : e
            );
        }
    }


    async _failed(test: any) {

        await this._attachVideo(test);
    }


    async _passed(test: any) {

        await this._attachVideo(test);
    }
}

export default PlaywrightVideoAllure;