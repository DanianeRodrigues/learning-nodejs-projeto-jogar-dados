/*CONTROLLER JOGO:
responsavel por:

-manter uma instância do model 
-pedir ao model para iniciar o jogo
-pedir o model para inciar os dados
-pedir o model para encerrar o jogo
-pedir para inciar um novo jogo 

*/

var model = require ('../models/jogo');
var jogoModel = undefined;
module.exports.iniciar = function (application, req, res){
	console.log ('controle: iniciar ');
	console.log ('controle: Criar instância de jogo');
	jogoModel = new model.Jogo ();
	console.log('controller:atualiza view - novoJogo');
	res.render('novoJogo');
}
module.exports.novoLancamento = function(application, req, res){
	console.log('constroller:novoLancamento');
	if (jogoModel){
		console.log('constroller: pede para o model fazer novoLancamento');
		var resultado = jogoModel.lancarDados();
		res.render('novoLancamento' . (lancamento: resultado));

	}
}