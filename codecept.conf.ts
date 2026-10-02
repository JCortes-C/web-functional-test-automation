exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.youtube.com/',
      show: true,
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
    },
    PlaywrightVideoAllure: {
        require: './utils/playwrightVideoAllure_helper'
    }
  },
  include: {
     I: './steps_file.ts',
     youtubePages: './pages/telcelPages.ts'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
     features: './features/*.feature',
     steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshot: {
      enabled: true,
      on: 'fail'
    },
    allure:{
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.ts',
  noGlobals: true,
  name: 'web-test-automation',
  require: ['tsx/esm']
}