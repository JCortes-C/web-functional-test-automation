# Clonar el repositorio
git clone 

## Instalación

Este proyecto utiliza Node.js y pnpm.

# 1. Instalar las dependencias
pnpm install

# 2. Ejecutar las pruebas
pnpm exec codeceptjs run --features --grep 'Tag respectivo a la prueba que quieres ejecutar' --steps --verbose

# Generar reporte
'pnpm run generacionallure'

 Esa linea es equivalente a esta otra: 

'pnpm exec allure generate ./output/allure-results -o ./allure-report --clean'


# Abrir reporte
 'pnpm run abrirreporteallure'

Esa linea es equivalente a esta otra: 

'pnpm run allure open ./allure-report'

