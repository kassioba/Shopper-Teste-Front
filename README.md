# Shopper-Teste-Front
Programa para atualizar preços de tabelas de mercado feito para o teste da vaga de Desenvolvedor FullStack Junior da startup Shopper. Este é o Front-End do projeto.

# Tecnologias utilizadas
- TypeScript
- React.js
- Vite

# Setup
- Arquivo .env.example presente na raiz do projeto com o campo necessário para conectar a API;
- Utilize o comando "npm i" para instalar as dependências do projeto;
- Utilize o comando "npm run dev" para iniciar a aplicação.

# Regras de negócio
- Preço de venda dos produtos não podem ser abaixo do preço de custo;
- O novo preço de venda não pode ser 10% acima ou abaixo do atual preço de venda;
- Alguns produtos fazem parte de pacotes, estando ambos disponíveis para atualização de preço. Caso o preço de um produto pertencente a um pacote tenha seu preço atualizado, o preço do pacote deve ser atualizado para igualar a soma de todos produtos que o compõe. Caso o preço de um pacote seja atualizado, o preço de seus produtos deve ser atualizado para quando somados sejam equivalentes ao preço do pacote. Ambas as atualizações de preço devem estar contidas no arquivo .csv.

# Fluxo
![image](https://github.com/kassioba/Shopper-Teste-Front/assets/114841639/f22f0ed7-6562-4255-91f1-abcdb6e96b41)

- Clique no botão "Adicionar Arquivo" e escolha um arquivo .csv;
- Clique em validar para verificar se o arquivo segue os padrões desejados pela aplicação;
- Caso os campos do arquivo estejam incompletos ou com formato diferente do estabelecido, aparecerá um erro explicando o formato correto dos dados;
- Caso os campos do arquivo estejam preenchidos corretamente aparecerá uma tabela como na imagem abaixo:  
  
![image](https://github.com/kassioba/Shopper-Teste-Front/assets/114841639/8721e357-e1ce-4789-b865-c3c7e0477207)

- Caso o arquivo possua um ou mais erros previstos nas regras de negócio, os botões de erro serão liberados ao lado dos produtos que quebraram as regras de negócio, acionando uma tela com a explicação de cada erro;
- Caso o arquivo siga os padrões previstos nas regras de negócio, o botão "Atualizar' será liberado para que os preços dos produtos possam ser atualizados;
- Após a atualização, a tabela desaparecerá, o botão de atualizar será desabilidado e será possível adicionar outro arquivo .csv para validação.
