# Solucion del test

En el repositorio dejo la solucion del test que me pidieron junto a los casos de prueba.

## Postman

Para las pruebas usando Postman, hay que importar el archivo Postman\toolbox.postman_collection.json
dentro de postman, una vez importado le damos al boton runner, seleccionamos la coleccion de toolbox/test y le damos al boton "run test".

## Docker

Usando docker abria que crear la imagen a partir del dockerfile usando el siguiente comando:

```bash
docker build -t usuariodocker/toolbox .
```

Luego de que se construya la imagen y no nos haya dado error, ejecutamos el docker

```bash
docker run --name toolbox -d usuariodocker/toolbox
```

Por ultimo revisamos el resultado despues de que se corrieron las pruebas en el docker:

```bash
docker ps -a
```

elegimos el Id de nuestro docker

```bash
docker logs NroId
```