angular.module('starter.aop',['starter.services'])

  /**
  *
  *  Este aspecto é responsável por lançar uma exceção caso
  *  o usuário acesse um item restrito e não esteja autenticado.
  *
  **/
  .config(function($provide,executeProvider){
    executeProvider.annotate($provide,{
      /** definindo o aspecto do serviço **/
      Items: [
        {
          jointPoint: executeProvider.BEFORE, /** antes de executar **/
          advice: 'Autenticacao', /** serviço que vai verificar no BEFORE **/
          methodPattern: /Especial/ /** método que irá disparar **/
        },
        {
          jointPoint: executeProvider.ON_THROW, /** as exceções serão tratadas pelo logger **/
          advice: 'Logger' /** classe logger **/
        }
      ],
      CheckoutService: [
        {
          jointPoint: executeProvider.AFTER_RESOLVE,
          advice: 'Logger'
        }
      ]
    })
  })
