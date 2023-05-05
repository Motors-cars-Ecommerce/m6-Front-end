# Motors Shop

Motors Shop é uma aplicação web que permite a compra e venda de carros de forma fácil e intuitiva. Desenvolvida em React com TypeScript e Styled Components, a plataforma oferece cards de carros com informações como fotos, quilometragem, preço, ano, descrição, marca e modelo, além de filtros para busca de modelos específicos. Os anunciantes podem registrar seus carros, gerenciar seus anúncios e editar ou excluir a qualquer momento. O Motors Shop oferece modais de confirmação para cadastro e exclusão de anúncios, proporcionando uma experiência mais segura e confiável para os usuários.

## URL
URL utilizara para as requisições do json-server:

https://motors-cars-g17.onrender.com

## Tecnologias usadas
* React
* TypeScript
* Styled Components
* Vite

## Funcionalidades
* Disponibilidade em dispositivos móveis e desktop: a aplicação pode ser acessada em dispositivos móveis e desktop, garantindo que os usuários possam usá-la em qualquer dispositivo.

* Cards de carros com imagens: os usuários podem visualizar cards de carros com até 6 fotos, quilometragem, preço, ano, descrição, marca e modelo. O anunciante pode escolher uma foto principal para seu anúncio.

* Registro de usuários: dois tipos de usuários podem ser registrados na aplicação: anunciante e comprador.

* Preenchimento automático da tabela FIPE: ao registrar um carro na plataforma, o anunciante pode informar o modelo e a marca, e o preço é preenchido automaticamente com base na tabela FIPE.

* Gerenciamento de anúncios: o anunciante pode ver seus carros anunciados em uma página de "meus anúncios" e editar qualquer um de seus anúncios. Os anúncios também podem ser desativados (soft delete) ou permanentemente excluídos.

* Comentários: os usuários podem comentar nos anúncios dos carros e também excluir seus próprios comentários.

* Edição de perfil: o usuário pode editar seus dados e incluir o endereço durante o registro.

* Dashboard com filtros: a dashboard possui filtros para visualizar determinados modelos de carros e outras informações específicas sobre os carros.

### Rotas que não precisam de autorização

### Cadastro de usuário

### Post /register

```
{
		"name": "matheus",
    "email": "matheus@mail.com",
    "cpf": "10012220000",
    "password": "12345",
    "phone": "199999599",
    "birthday": "05/05/1995",
		"description": "teste de descrição para usuario",
    "seller": true,
    "isActive": true,
		"addresses":
			{
					"cep": "12345679",
					"street": "rua teste",
				"state": "DF",
					"city": "teste",
					"number": "50",
					"complement":"none"
				}
}
```
Exemplo da resposta:

```
{
	"id": "d26b1c75-61f2-4824-86af-7a32b20bbf9a",
	"name": "matheus",
	"email": "matheus@mail.com",
	"phone": "199999599",
	"birthday": "1995-05-05T06:00:00.000Z",
	"seller": true,
	"isActive": true,
	"createdAt": "2023-05-02T21:07:07.664Z",
	"updatedAt": "2023-05-02T21:07:07.664Z"
}
```

Exemplo de erro:

```
"Email already exists"
```

### Login

### POST /login

Exemplo do body:

```
{
		"email": "matheus@mail.com",
    "password": "12345"
}
```

Exemplo da resposta:

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTIzQG1haWwuY29tIiwiaWF0IjoxNjY4MDAwNDUxLCJleHAiOjE2NjgwMDQwNTEsInN1YiI6IjEifQ.pWLaN5H8j6cOO_QAtTR00Bev0WjXimUz_FWTYeNIu14",
}
```

### GET para cars

```
{
  "km": 50000,
  "price": 400000,
  "color": "Preto",
  "description": "blablablwefokwifwjg-w9gjgj4-g93jg9gj testando",
  "user": "5def391c-4183-4afe-97fc-79e1333bdec6",
	"main_image": "https://cdn.autopapo.com.br/box/uploads/2021/08/11162502/fiat-uno-furgao-branco-de-frente-1920x1268.jpg",
	"model_car":{
    "branded":"string2",
    "model": "string3",
    "year": "2023",
    "fuel": "string1"
			},
	"images":[
			{
			"image_url": "teste1"
			},
			{
			"image_url": "teste2"
			},
			{
			"image_url": "teste3"
			}
		]
}
```
## Rotas que precisam de autorização

# Criar comentários

## POST - comments/

```
{ 
		"text": "teste comentario",
    "car": "f2083e02-7c83-4c2b-9bee-a71b7dbc3788",
    "user": "65fbd7d7-1f75-473c-88ce-4346d72beb6a"
}
```
