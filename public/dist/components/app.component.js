"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../services/auth.service');
var App = (function () {
    function App(_authService) {
        this._authService = _authService;
        this.user = { authenticated: false };
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.fetch().subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'bar-app',
            templateUrl: './templates/app.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map