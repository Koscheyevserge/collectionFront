"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.data = [
            {
                id: 1, date: new Date(), client: {
                    id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: null, risk: null, agreements: null,
                    address: null, transactions: null, status: {
                        id: 1, clients: null, name: "Активна", description: "Задача активна"
                    }, specialization: null, contacts: null
                }, status: {
                    id: 1, tasks: null, name: "Активна", description: "Задача активна"
                }, user: null, title: "Оповестить получателя о задолженности",
                description: "Позвонить клиенту и сообщить о задолженности"
            },
            {
                id: 2, date: new Date(), client: {
                    id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: null, risk: null, agreements: null,
                    address: null, transactions: null, status: {
                        id: 1, clients: null, name: "Активна", description: "Задача активна"
                    }, specialization: null, contacts: null
                }, status: {
                    id: 1, tasks: null, name: "Активна", description: "Задача активна"
                }, user: null, title: "Оповестить получателя о задолженности",
                description: "Позвонить клиенту и сообщить о задолженности"
            },
            {
                id: 3, date: new Date(), client: {
                    id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: null, risk: null, agreements: null,
                    address: null, transactions: null, status: {
                        id: 1, clients: null, name: "Активна", description: "Задача активна"
                    }, specialization: null, contacts: null
                }, status: {
                    id: 1, tasks: null, name: "Активна", description: "Задача активна"
                }, user: null, title: "Оповестить получателя о задолженности",
                description: "Позвонить клиенту и сообщить о задолженности"
            },
            {
                id: 4, date: new Date(), client: {
                    id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: null, risk: null, agreements: null,
                    address: null, transactions: null, status: {
                        id: 1, clients: null, name: "Активна", description: "Задача активна"
                    }, specialization: null, contacts: null
                }, status: {
                    id: 1, tasks: null, name: "Активна", description: "Задача активна"
                }, user: null, title: "Оповестить получателя о задолженности",
                description: "Позвонить клиенту и сообщить о задолженности"
            },
            {
                id: 5, date: new Date(), client: {
                    id: 1, name: "АТТІК ІНТЕР’ЄР ГРУПП ТОВ", code: null, risk: null, agreements: null,
                    address: null, transactions: null, status: {
                        id: 1, clients: null, name: "Активна", description: "Задача активна"
                    }, specialization: null, contacts: null
                }, status: {
                    id: 1, tasks: null, name: "Активна", description: "Задача активна"
                }, user: null, title: "Оповестить получателя о задолженности",
                description: "Позвонить клиенту и сообщить о задолженности"
            }
        ];
    }
    QueryService.prototype.getAll = function () {
        return this.data;
    };
    return QueryService;
}());
exports.QueryService = QueryService;
//# sourceMappingURL=query.service.js.map