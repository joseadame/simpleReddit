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
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
    };
    RedditApp.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            template: "\n\t\t<form class=\"ui large form segment\">\n\t\t\t<h3 class=\"ui header\"> Add a link </h3>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"title\">Title:</label>\n\t\t\t\t<input name=\"title\" #newtitle>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"link\">Link:</label>\n\t\t\t\t<input name=\"link\" #newlink>\n\t\t\t</div>\n\t\t\t<button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n\t\t\tSubmit link\n\t\t\t</button>\n\t\t</form>\n\t\t<div class=\"ur grid posts\">\n\t\t\t<reddit-article *ngFor=\"let article of sortedArticles()\" [article]=\"article\">\n\t\t\t</reddit-article>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
}());
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.article = new Article('Angular 2', 'http://angular.io', 10);
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
            host: {
                class: 'row'
            },
            template: "\n\t\t<div class=\"four wide column center aligned votes\">\n\t\t\t<div class=\"ui statistic\">\n\t\t\t\t<div class=\"value\">\n\t\t\t\t\t{{ article.votes }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"label\">\n\t\t\t\t\tPoints\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"twelve wide column\">\n\t\t\t<a class=\"ui large header\" href=\"{{ link }}\">\n\t\t\t\t{{ article.title }}\n\t\t\t</a>\n\t\t\t<div class=\"meta\">({{ article.domain() }})</div>\n\t\t\t<ul class=\"ui big horizontal list voters\">\n\t\t\t\t<li class=\"item\">\n\t\t\t\t\t<a href (click)=\"voteUp()\">\n\t\t\t\t\t\t<i class=\"arrow up icon\"></i>\n\t\t\t\t\t\tupvote\n\t\t\t\t\t</a>\n\t\t\t\t<li class=\"item\">\n\t\t\t\t\t<a href (click)=\"voteDown()\">\n\t\t\t\t\t\t<i class=\"arrow down icon\"></i>\n\t\t\t\t\t\tdownvote\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Article.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());
var RedditAppModule = (function () {
    function RedditAppModule() {
    }
    RedditAppModule = __decorate([
        core_1.NgModule({
            declarations: [RedditApp, ArticleComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [RedditApp]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditAppModule);
    return RedditAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RedditAppModule);
//# sourceMappingURL=app.js.map