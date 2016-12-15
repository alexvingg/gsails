(function () {
    'use strict';

    angular
        .module('app')
        .factory('GraficosService', GraficosService);

    GraficosService.$inject = ['AnalistasService'];

    function GraficosService(AnalistasService) {
        var _obterGraficoEspecialidade = function(width, height){
            if(!width) {width=450;}
            if(!height) {height=220;}

            var graficoEspecialidade = {};
            graficoEspecialidade.type = "PieChart";
            //graficoEspecialidade.type = "google.charts.Bar";
            graficoEspecialidade.data = [['Component', 'cost']];
            
            AnalistasService.listarTotalPorEspecialidade().$promise.then(function(lista){
                lista.forEach(function(a){
                    graficoEspecialidade.data.push([a.especialidade,a.qtde]);
                });
            });

            graficoEspecialidade.options = {
                displayExactValues: true,
                width: width,
                height: height,
                is3D: true,
                chartArea: {left:10,top:10,bottom:0,height:"100%"}
            };

            graficoEspecialidade.formatters = {
                number : [{
                columnNum: 1,
                pattern: "Qtde: ##00"
                }]
            };
            return graficoEspecialidade;
        };

        return {
            obterGraficoEspecialidade: _obterGraficoEspecialidade
        };
    }

} ());
