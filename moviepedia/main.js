(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-movies/all-movie-details/all-movie-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/all-movies/all-movie-details/all-movie-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .row {\r\n    position: relative;\r\n    top: -815px;\r\n} */\r\n\r\n.background {\r\n    position: absolute;\r\n    z-index: 0;\r\n    width: 100%;\r\n    /* margin-left: -206px; */\r\n    height: 100%; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.container {\r\n    width: 850px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    filter: alpha(opacity=90);\r\n    opacity: 0.9;  \r\n}\r\n\r\n/* img {\r\n    opacity: 0.9;\r\n} */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLW1vdmllcy9hbGwtbW92aWUtZGV0YWlscy9hbGwtbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSTs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjs7QUFFRDs7SUFFSSIsImZpbGUiOiJzcmMvYXBwL2FsbC1tb3ZpZXMvYWxsLW1vdmllLWRldGFpbHMvYWxsLW1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtODE1cHg7XHJcbn0gKi9cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMjA2cHg7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xyXG4gICAgb3BhY2l0eTogMC45OyAgXHJcbn1cclxuXHJcbi8qIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn0gKi9cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/all-movies/all-movie-details/all-movie-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/all-movies/all-movie-details/all-movie-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"background\" [ngStyle]=\"{'background-image': 'url(https://image.tmdb.org/t/p/original/' + movie.backdrop_path + ')'}\"> </div>\r\n  <div class=\"container\">\r\n\r\n    <div *ngIf=\"movie\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card mt-5 mb-5\">\r\n            <div class=\"card-header\">\r\n              {{ movie.title }}\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                  <img src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" class=\"img-fluid\" alt=\"{{ movie.title }}\">\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Release Date: </strong> {{ movie.release_date | date:'dd-MM-yyyy' }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Tagline: </strong> {{ movie.tagline }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Summary: </strong> {{ movie.overview }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Runtime: </strong> {{ movie.runtime }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <strong>Budget: </strong> {{ movie.budget }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Vote Average: </strong> {{ movie.vote }}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Genre: </strong>\r\n                      <span *ngFor=\"let genre of movie.genres\" class=\"badge badge-primary mr-2\">\r\n                        {{ genre.name }}\r\n                      </span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <a href=\"{{ movie.homepage }}\" target=\"_blank\">\r\n                        Movie Homepage\r\n                      </a>\r\n                      <a href=\"https://www.imdb.com/title/{{ movie.imdb_id }}\" target=\"_blank\" class=\"btn btn-sm btn-info float-right\">\r\n                        IMDB Link\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div><!-- /.card -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/all-movies/all-movie-details/all-movie-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/all-movies/all-movie-details/all-movie-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AllMovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMovieDetailsComponent", function() { return AllMovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-movies.service */ "./src/app/all-movies/all-movies.service.ts");




var AllMovieDetailsComponent = /** @class */ (function () {
    function AllMovieDetailsComponent(router, allMovieService) {
        this.router = router;
        this.allMovieService = allMovieService;
    }
    AllMovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['movieID'];
            _this.allMovieService.getMovie(id).subscribe(function (data) {
                _this.movie = data;
            });
        });
    };
    AllMovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movie-details',
            template: __webpack_require__(/*! ./all-movie-details.component.html */ "./src/app/all-movies/all-movie-details/all-movie-details.component.html"),
            styles: [__webpack_require__(/*! ./all-movie-details.component.css */ "./src/app/all-movies/all-movie-details/all-movie-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _all_movies_service__WEBPACK_IMPORTED_MODULE_3__["AllMoviesService"]])
    ], AllMovieDetailsComponent);
    return AllMovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/all-movies/all-movies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\r\n    font-size: 24px;\r\n    display: block;\r\n    width: 99%;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    padding-left: 16px;\r\n}\r\n\r\n.input-group {\r\n    top: -19px;\r\n    margin-left: 20%;\r\n}\r\n\r\n.titleBar {\r\n    background-color: #000;\r\n    display: block;\r\n    color: #fff;\r\n    padding-left: 16px\r\n  }\r\n\r\n.date {\r\n    margin-top: 27px;\r\n    float: left;\r\n}\r\n\r\n.extra-content {\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: -35px;\r\n}\r\n\r\n.card-body {\r\n    margin-bottom: -27px;\r\n}\r\n\r\n.container {\r\n    margin-left: -1.5%;\r\n}\r\n\r\nspan, div, h4 {\r\n    color: white;\r\n}\r\n\r\n.card {\r\n    background-color: black;\r\n}\r\n\r\n.movies .movie {\r\n    position: relative;\r\n    margin: 1rem .625rem;\r\n    width: 290px;\r\n    text-align: center;\r\n}\r\n\r\n.movie {\r\n    height: 710px;\r\n}\r\n\r\n.movies {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLW1vdmllcy9hbGwtbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7R0FDbkI7O0FBRUg7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWxsLW1vdmllcy9hbGwtbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgdG9wOiAtMTlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi50aXRsZUJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweFxyXG4gIH1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjdweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuNSU7XHJcbn1cclxuXHJcbnNwYW4sIGRpdiwgaDQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vdmllcyAubW92aWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxcmVtIC42MjVyZW07XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3ZpZSB7XHJcbiAgICBoZWlnaHQ6IDcxMHB4O1xyXG59XHJcblxyXG4ubW92aWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n<div>\r\n\r\n  <div class=\"container\">\r\n    <form action=\"/action_page.php\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"movie\" [(ngModel)]=\"movie\">\r\n        <div class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\" type=\"submit\" (click)=\"searchMovies()\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n<div class=\"movies\">\r\n  <div *ngFor=\"let movie of search_result; let i = index\">\r\n    <div *ngIf=\"i < 15\">\r\n      <div class=\"card mt-3 mb-3 movie\">\r\n        <div class=\"card-header text-center card bg-dark text-white\">\r\n          {{ movie.release_date | date:'mediumDate' }}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" alt=\"{{ movie.original_title }}\" style=\"height: 460px\">\r\n          <h4 class=\"text-center font-weight-bold\">{{ movie.original_title }}</h4>\r\n          <div class=\"description\">\r\n            <span>Popularity</span>\r\n            : {{ movie.popularity  | number : '1.0-1' }}\r\n            <br>\r\n            <span>Vote count</span>\r\n            : {{ movie.vote_count }}\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"extra-content\">\r\n          <span class=\"float-right\">\r\n            <h3>\r\n              <i class=\"glyphicon glyphicon-star\"></i>\r\n              {{ movie.vote_average }}\r\n            </h3>\r\n    \r\n          </span>\r\n          <h4 class=\"date\">\r\n            {{ movie.release_date }}\r\n          </h4>\r\n        </div>\r\n          <a routerLink=\"/movie/{{ movie.id }}\" href=\"#\" class=\"btn btn-block btn-info\">Movie Details</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h1>Upcoming Movies</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies\">\r\n  <div *ngFor=\"let upcoming of upcoming_movies; let i = index\">\r\n    <div *ngIf=\"i < 15\">\r\n      <div class=\"card mt-3 mb-3 movie\">\r\n        <div class=\"card-header text-center card bg-dark text-white\">\r\n          {{ upcoming.release_date | date:'mediumDate' }}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ upcoming.poster_path }}\" alt=\"{{ upcoming.original_title }}\" style=\"height: 460px\">\r\n          <h4 class=\"text-center font-weight-bold\">{{ upcoming.original_title }}</h4>\r\n          <div class=\"description\">\r\n            <span>Popularity</span>\r\n            : {{ upcoming.popularity  | number : '1.0-1' }}\r\n            <br>\r\n            <span>Vote count</span>\r\n            : {{ upcoming.vote_count }}\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"extra-content\">\r\n          <span class=\"float-right\">\r\n            <h3>\r\n              <i class=\"glyphicon glyphicon-star\"></i>\r\n              {{ upcoming.vote_average }}\r\n            </h3>\r\n    \r\n          </span>\r\n          <h4 class=\"date\">\r\n            {{ upcoming.release_date }}\r\n          </h4>\r\n        </div>\r\n          <a routerLink=\"/movie/{{ upcoming.id }}\" href=\"#\" class=\"btn btn-block btn-info\">Movie Details</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h1>Popular Movies</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies\">\r\n  <div *ngFor=\"let popular of popular_movies; let i = index\">\r\n    <div *ngIf=\"i < 15\">\r\n      <div class=\"card mt-3 mb-3 movie\">\r\n        <div class=\"card-header text-center card bg-dark text-white\">\r\n          {{ popular.release_date | date:'mediumDate' }}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ popular.poster_path }}\" alt=\"{{ popular.original_title }}\" style=\"height: 460px\">\r\n          <h4 class=\"text-center font-weight-bold\">{{ popular.original_title }}</h4>\r\n          <div class=\"description\">\r\n            <span>Popularity</span>\r\n            : {{ popular.popularity  | number : '1.0-1' }}\r\n            <br>\r\n            <span>Vote count</span>\r\n            : {{ popular.vote_count }}\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"extra-content\">\r\n          <span class=\"float-right\">\r\n            <h3>\r\n              <i class=\"glyphicon glyphicon-star\"></i>\r\n              {{ popular.vote_average }}\r\n            </h3>\r\n    \r\n          </span>\r\n          <h4 class=\"date\">\r\n            {{ popular.release_date }}\r\n          </h4>\r\n        </div>\r\n          <a routerLink=\"/movie/{{ popular.id }}\" href=\"#\" class=\"btn btn-block btn-info\">Movie Details</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.ts ***!
  \****************************************************/
/*! exports provided: AllMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesComponent", function() { return AllMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _all_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-movies.service */ "./src/app/all-movies/all-movies.service.ts");



var AllMoviesComponent = /** @class */ (function () {
    function AllMoviesComponent(allMovieService) {
        var _this = this;
        this.allMovieService = allMovieService;
        this.allMovieService.getUpcomingMovies().subscribe(function (data) {
            _this.upcoming_movies = data['results'];
        });
        this.allMovieService.getPopularMovies().subscribe(function (data) {
            _this.popular_movies = data['results'];
        });
    }
    AllMoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this.allMovieService.searchMovie(this.movie).subscribe(function (data) {
            _this.search_result = data['results'];
        });
    };
    AllMoviesComponent.prototype.ngOnInit = function () { };
    AllMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movies',
            template: __webpack_require__(/*! ./all-movies.component.html */ "./src/app/all-movies/all-movies.component.html"),
            styles: [__webpack_require__(/*! ./all-movies.component.css */ "./src/app/all-movies/all-movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_movies_service__WEBPACK_IMPORTED_MODULE_2__["AllMoviesService"]])
    ], AllMoviesComponent);
    return AllMoviesComponent;
}());



/***/ }),

/***/ "./src/app/all-movies/all-movies.service.ts":
/*!**************************************************!*\
  !*** ./src/app/all-movies/all-movies.service.ts ***!
  \**************************************************/
/*! exports provided: AllMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesService", function() { return AllMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AllMoviesService = /** @class */ (function () {
    function AllMoviesService(_http) {
        this._http = _http;
        this.movie_url = 'https://api.themoviedb.org/3/';
        this.api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
    }
    AllMoviesService.prototype.getUpcomingMovies = function () {
        return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31' + '&api_key=' + this.api_key);
    };
    AllMoviesService.prototype.getPopularMovies = function () {
        return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
    };
    AllMoviesService.prototype.searchMovie = function (movie) {
        this.movie_string = movie;
        return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
    };
    AllMoviesService.prototype.getMovie = function (id) {
        return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
    };
    AllMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AllMoviesService);
    return AllMoviesService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");
/* harmony import */ var _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies-detail/movies-detail.component */ "./src/app/movies/movies-detail/movies-detail.component.ts");
/* harmony import */ var _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movie-start/movie-start.component */ "./src/app/movies/movie-start/movie-start.component.ts");
/* harmony import */ var _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movie-edit/movie-edit.component */ "./src/app/movies/movie-edit/movie-edit.component.ts");
/* harmony import */ var _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-movies/all-movie-details/all-movie-details.component */ "./src/app/all-movies/all-movie-details/all-movie-details.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people/people-detail/people-detail.component */ "./src/app/people/people-detail/people-detail.component.ts");











var appRoutes = [
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"], children: [
            { path: '', component: _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_6__["MovieStartComponent"] },
            { path: 'new', component: _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__["MovieEditComponent"] },
            { path: ':id', component: _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_5__["MoviesDetailComponent"] },
            { path: ':id/edit', component: _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_7__["MovieEditComponent"] },
        ] },
    { path: '', component: _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_4__["AllMoviesComponent"] },
    { path: 'movie/:movieID', component: _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["AllMovieDetailsComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"] },
    { path: 'people/:peopleID', component: _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_10__["PeopleDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"background\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'movie';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies/movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies/movie-list/movie-item/movie-item.component */ "./src/app/movies/movie-list/movie-item/movie-item.component.ts");
/* harmony import */ var _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/movies-detail/movies-detail.component */ "./src/app/movies/movies-detail/movies-detail.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movies/movie-start/movie-start.component */ "./src/app/movies/movie-start/movie-start.component.ts");
/* harmony import */ var _all_movies_all_movies_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-movies/all-movies.service */ "./src/app/all-movies/all-movies.service.ts");
/* harmony import */ var _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movies/movie-edit/movie-edit.component */ "./src/app/movies/movie-edit/movie-edit.component.ts");
/* harmony import */ var _movies_movies_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movies/movies.service */ "./src/app/movies/movies.service.ts");
/* harmony import */ var _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./all-movies/all-movie-details/all-movie-details.component */ "./src/app/all-movies/all-movie-details/all-movie-details.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _people_people_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./people/people.service */ "./src/app/people/people.service.ts");
/* harmony import */ var _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./people/people-detail/people-detail.component */ "./src/app/people/people-detail/people-detail.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__["MovieListComponent"],
                _movies_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_9__["MovieItemComponent"],
                _movies_movies_detail_movies_detail_component__WEBPACK_IMPORTED_MODULE_10__["MoviesDetailComponent"],
                _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_11__["AllMoviesComponent"],
                _movies_movie_start_movie_start_component__WEBPACK_IMPORTED_MODULE_13__["MovieStartComponent"],
                _movies_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_15__["MovieEditComponent"],
                _all_movies_all_movie_details_all_movie_details_component__WEBPACK_IMPORTED_MODULE_17__["AllMovieDetailsComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_18__["PeopleComponent"],
                _people_people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_20__["PeopleDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_all_movies_all_movies_service__WEBPACK_IMPORTED_MODULE_14__["AllMoviesService"], _movies_movies_service__WEBPACK_IMPORTED_MODULE_16__["MovieService"], _people_people_service__WEBPACK_IMPORTED_MODULE_19__["PeopleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"\">Moviepedia</a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/people\">Actor/Actress</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"/movies\">Movie</a>\r\n    </div>\r\n  </div>\r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n      <a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a>\r\n      <a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _save_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../save/data-storage.service */ "./src/app/save/data-storage.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeMovies()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.getMovies();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_save_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie-edit/movie-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/movies/movie-edit/movie-edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div ,label {\r\n    color: white;\r\n}\r\n\r\n.edit{\r\n    margin-left: 40%;\r\n    margin-top: 16%;\r\n}\r\n\r\n.btn-success {\r\n    margin-right: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWVkaXQvbW92aWUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtZWRpdC9tb3ZpZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgLGxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVkaXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTYlO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movie-edit/movie-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-edit/movie-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 edit\">\r\n    <form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-success\"\r\n            [disabled]=\"!movieForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"name\"\r\n              formControlName=\"name\"\r\n              class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"imagePath\">Image URL</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"imagePath\"\r\n              formControlName=\"imagePath\"\r\n              class=\"form-control\"\r\n              #imagePath>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <img [src]=\"imagePath.value\" class=\"img-responsive\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea\r\n              type=\"text\"\r\n              id=\"description\"\r\n              class=\"form-control\"\r\n              formControlName=\"description\"\r\n              rows=\"6\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movies/movie-edit/movie-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/movie-edit/movie-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
        this.editMode = false;
    }
    MovieEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
        });
        this.initForm();
    };
    MovieEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.movieService.updateMovie(this.id, this.movieForm.value);
        }
        else {
            this.movieService.addMovie(this.movieForm.value);
        }
        this.onCancel();
    };
    MovieEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    MovieEditComponent.prototype.initForm = function () {
        var movieName = '';
        var movieImagePath = '';
        var movieDescription = '';
        if (this.editMode) {
            var movie = this.movieService.getMovie(this.id);
            movieName = movie.name;
            movieImagePath = movie.imagePath;
            movieDescription = movie.description;
        }
        this.movieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](movieDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit',
            template: __webpack_require__(/*! ./movie-edit.component.html */ "./src/app/movies/movie-edit/movie-edit.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit.component.css */ "./src/app/movies/movie-edit/movie-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MovieEditComponent);
    return MovieEditComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie-list/movie-item/movie-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-item/movie-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n    margin: 15px;\r\n    width: 200%;\r\n    left: -255px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWxpc3QvbW92aWUtaXRlbS9tb3ZpZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1pdGVtL21vdmllLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgbGVmdDogLTI1NXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-item/movie-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-item/movie-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix item\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ movie.name }}</h4>\n    <p class=\"list-group-item-text\">{{ movie.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n        <img\n          [src]=\"movie.imagePath\"\n          alt=\"{{ movie.name }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n</a>\n"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-item/movie-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-item/movie-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.model */ "./src/app/movies/movie.model.ts");



var MovieItemComponent = /** @class */ (function () {
    // @Output() movieSelected = new EventEmitter<void>();
    function MovieItemComponent() {
    }
    MovieItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieItemComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MovieItemComponent.prototype, "index", void 0);
    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-item',
            template: __webpack_require__(/*! ./movie-item.component.html */ "./src/app/movies/movie-list/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.css */ "./src/app/movies/movie-list/movie-item/movie-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new {\r\n    margin: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXcge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success new\" (click)=\"onNewMovie()\">New Movie</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <hr>\n  <div class=\"col-xs-12\">\n    <app-movie-item\n      *ngFor=\"let moviee of movies; let i = index\"\n      [movie]=\"moviee\"\n      [index]=\"i\"></app-movie-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.movies = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.movieService.moviesChanged
            .subscribe(function (movies) {
            _this.movies = movies;
        });
        this.movies = this.movieService.getMovies();
    };
    MovieListComponent.prototype.onNewMovie = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    MovieListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movies/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movies/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie-start/movie-start.component.css":
/*!**************************************************************!*\
  !*** ./src/app/movies/movie-start/movie-start.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select {\r\n    margin-top: 50%;\r\n    margin-left: 30%;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLXN0YXJ0L21vdmllLXN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1zdGFydC9tb3ZpZS1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/movies/movie-start/movie-start.component.html":
/*!***************************************************************!*\
  !*** ./src/app/movies/movie-start/movie-start.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"select\">\n  Please select a movie !!!\n</h1>"

/***/ }),

/***/ "./src/app/movies/movie-start/movie-start.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-start/movie-start.component.ts ***!
  \*************************************************************/
/*! exports provided: MovieStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieStartComponent", function() { return MovieStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieStartComponent = /** @class */ (function () {
    function MovieStartComponent() {
    }
    MovieStartComponent.prototype.ngOnInit = function () {
    };
    MovieStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-start',
            template: __webpack_require__(/*! ./movie-start.component.html */ "./src/app/movies/movie-start/movie-start.component.html"),
            styles: [__webpack_require__(/*! ./movie-start.component.css */ "./src/app/movies/movie-start/movie-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieStartComponent);
    return MovieStartComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/movies/movie.model.ts ***!
  \***************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(name, description, imagePath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/movies/movies-detail/movies-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/movies/movies-detail/movies-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\r\n    margin-left: 35%;\r\n    margin-top: 15%;\r\n}\r\n\r\ndiv {\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy1kZXRhaWwvbW92aWVzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLWRldGFpbC9tb3ZpZXMtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/movies/movies-detail/movies-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/movies/movies-detail/movies-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <img\n        [src]=\"movie.imagePath\"\n        alt=\"{{ movie.name }}\"\n        class=\"img-responsive\"\n        style=\"max-height: 300px;\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>{{ movie.name }}</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a style=\"cursor :pointer;\" (click)=\"onEditMovie()\">Edit Movie details</a>\n      <br>\n      <a style=\"cursor :pointer;\" (click)=\"onDeleteMovie()\">Delete Movie</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      {{ movie.description }}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      Cast\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movies/movies-detail/movies-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movies-detail/movies-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MoviesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesDetailComponent", function() { return MoviesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies/movies.service.ts");




var MoviesDetailComponent = /** @class */ (function () {
    function MoviesDetailComponent(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
    }
    MoviesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.movie = _this.movieService.getMovie(_this.id);
        });
    };
    MoviesDetailComponent.prototype.onEditMovie = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    MoviesDetailComponent.prototype.onDeleteMovie = function () {
        this.movieService.deleteMovie(this.id);
        this.router.navigate(['/movies']);
    };
    MoviesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-detail',
            template: __webpack_require__(/*! ./movies-detail.component.html */ "./src/app/movies/movies-detail/movies-detail.component.html"),
            styles: [__webpack_require__(/*! ./movies-detail.component.css */ "./src/app/movies/movies-detail/movies-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _movies_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoviesDetailComponent);
    return MoviesDetailComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-movie-list></app-movie-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies/movies.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieservice) {
        this.movieservice = movieservice;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        // this.movieservice.movieSelected
        // .subscribe(
        //   (movie: Movie) => {
        //     this.selectedMovie = movie;
        //   }
        // );
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            providers: [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]],
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.service.ts":
/*!******************************************!*\
  !*** ./src/app/movies/movies.service.ts ***!
  \******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.model */ "./src/app/movies/movie.model.ts");




var MovieService = /** @class */ (function () {
    function MovieService() {
        this.moviesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movies = [
            new _movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test', 'Movie details', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'),
            new _movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test 2', 'Movie details 2', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'),
            new _movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Movie test 2', 'Movie details 3', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg')
        ];
    }
    MovieService.prototype.getMovie = function (index) {
        return this.movies[index];
    };
    MovieService.prototype.getMovies = function () {
        return this.movies.slice();
    };
    MovieService.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.updateMovie = function (index, newMovie) {
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.deleteMovie = function (index) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.setMovies = function (movies) {
        this.movies = movies;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/people/people-detail/people-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/people/people-detail/people-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".biography {\r\n  font-size: 1.4em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n\r\np {\r\n  margin: 0 0 10.5px;\r\n}\r\n\r\n.media-object {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n  margin-top: -3%;\r\n}\r\n\r\n.item {\r\n  position: relative;\r\n  margin: 1rem .625rem;\r\n  width: 200px;\r\n  text-align: center;\r\n}\r\n\r\n.item:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nimg {\r\n  height: 70%;\r\n}\r\n\r\n.character {\r\n  color: #9e9e9e;\r\n}\r\n\r\n.title {\r\n  color: #fff;\r\n}\r\n\r\np, h1 {\r\n  color: azure;;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlL3Blb3BsZS1kZXRhaWwvcGVvcGxlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUtZGV0YWlsL3Blb3BsZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaW9ncmFwaHkge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwIDAgMTAuNXB4O1xyXG59XHJcblxyXG4ubWVkaWEtb2JqZWN0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDFyZW0gLjYyNXJlbTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyIHtcclxuICBjb2xvcjogIzllOWU5ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxucCwgaDEge1xyXG4gIGNvbG9yOiBhenVyZTs7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/people/people-detail/people-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/people/people-detail/people-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h1 class=\"page-header\">{{people.name}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"hidden-xxs col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n      <div class=\"person-profile\">\r\n        <img class=\"media-object\" width=\"300\" src=\"https://image.tmdb.org/t/p/w200/{{ people.profile_path }}\" alt=\"{{ people.name }}\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xxs-12 col-xs-9 col-sm-9 col-md-9 col-lg-9\">\r\n      <p class=\"biography\">Biography</p>\r\n      <p style=\"font-size: 1.1em;\">\r\n        {{people.biography}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"items\">\r\n  <div class=\"item\" *ngFor=\"let crew of crews; let i = index\">\r\n    <a routerLink=\"/movie/{{ crew.id }}\"> \r\n      <img *ngIf=\"crew.poster_path\" src=\"https://image.tmdb.org/t/p/w200/{{ crew.poster_path }}\" alt=\"{{ people.name }}\">\r\n      <img *ngIf=\"!crew.poster_path\" src=\"assets/images/no_poster.jpg\" alt=\"No poster available\">\r\n      <p class=\"title\">{{crew.title}}</p>\r\n      <p class=\"character\">{{crew.character}}</p>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/people/people-detail/people-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/people/people-detail/people-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PeopleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleDetailComponent", function() { return PeopleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../people.service */ "./src/app/people/people.service.ts");




var PeopleDetailComponent = /** @class */ (function () {
    function PeopleDetailComponent(router, peopleService) {
        this.router = router;
        this.peopleService = peopleService;
    }
    PeopleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['peopleID'];
            _this.peopleService.getDetail(id).subscribe(function (data) {
                _this.people = data;
            });
            _this.peopleService.getCrew(id).subscribe(function (data) {
                _this.crews = data['cast'];
            });
        });
    };
    PeopleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people-detail',
            template: __webpack_require__(/*! ./people-detail.component.html */ "./src/app/people/people-detail/people-detail.component.html"),
            styles: [__webpack_require__(/*! ./people-detail.component.css */ "./src/app/people/people-detail/people-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"]])
    ], PeopleDetailComponent);
    return PeopleDetailComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".people .person {\r\n    position: relative;\r\n    margin: 1rem .625rem;\r\n    width: 290px;\r\n    text-align: center;\r\n}\r\n\r\n.person {\r\n    height: 514px;\r\n    width: 267pxs;\r\n}\r\n\r\n.person:hover {\r\n    -webkit-transform: scale(1.03);\r\n            transform: scale(1.03); \r\n  }\r\n\r\n.people {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.search {\r\n    width: 80%;\r\n    margin-left: 12%;\r\n  }\r\n\r\n.searchTerm {\r\n    float: left;\r\n    width: 90%;\r\n    border: 3px solid #00B4CC;\r\n    padding: 5px;\r\n    height: 34px;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    color: #9DBFAF;\r\n    display: inline;\r\n}\r\n\r\n.searchTerm:focus{\r\n    color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n    display: inline;\r\n    right: -50px;\r\n    width: 40px;\r\n    height: 36px;\r\n    border: 1px solid #00B4CC;\r\n    background: #00B4CC;\r\n    text-align: center;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCO0dBQ3hCOztBQUVIO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0dBQ2xCOztBQUVEO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZW9wbGUgLnBlcnNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDFyZW0gLjYyNXJlbTtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBlcnNvbiB7XHJcbiAgICBoZWlnaHQ6IDUxNHB4O1xyXG4gICAgd2lkdGg6IDI2N3B4cztcclxufVxyXG5cclxuLnBlcnNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOyBcclxuICB9XHJcblxyXG4ucGVvcGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hUZXJtIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMEI0Q0M7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICM5REJGQUY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5zZWFyY2hUZXJtOmZvY3Vze1xyXG4gICAgY29sb3I6ICMwMEI0Q0M7XHJcbn1cclxuXHJcbi5zZWFyY2hCdXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcmlnaHQ6IC01MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBCNENDO1xyXG4gICAgYmFja2dyb3VuZDogIzAwQjRDQztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"wrap\">\r\n  <div class=\"search\">\r\n     <input type=\"text\" class=\"searchTerm\" placeholder=\"Search Actor/Actress\" name=\"person\" [(ngModel)]=\"person\">\r\n     <button type=\"submit\" class=\"searchButton\" (click)=\"searchpeople()\">\r\n       <i class=\"fa fa-search\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"people\">\r\n  <div *ngFor=\"let people of search_result; let i = index\">\r\n    <div *ngIf=\"i < 16\">\r\n      <div class=\"card mt-3 mb-3 person\">\r\n        <div class=\"card-header text-center card bg-dark text-white\">\r\n          {{people.name}}\r\n        </div>\r\n        <div class=\"card\">\r\n          <a routerLink=\"/people/{{ people.id }}\">\r\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{ people.profile_path }}\" alt=\"{{ people.name }}\" style=\"height: 460px\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"people\" *ngIf=\"!search_result\">\r\n  <div *ngFor=\"let people of people_list; let i = index\">\r\n    <div *ngIf=\"i < 16\">\r\n      <div class=\"card mt-3 mb-3 person\">\r\n        <div class=\"card-header text-center card bg-dark text-white\">\r\n          {{people.name}}\r\n        </div>\r\n        <div class=\"card\">\r\n          <a routerLink=\"/people/{{ people.id }}\">\r\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{ people.profile_path }}\" alt=\"{{ people.name }}\" style=\"height: 460px\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people.service */ "./src/app/people/people.service.ts");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(peopleService) {
        var _this = this;
        this.peopleService = peopleService;
        this.peopleService.getPeople().subscribe(function (data) {
            _this.people_list = data['results'];
        });
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent.prototype.searchpeople = function () {
        var _this = this;
        this.peopleService.searchPerson(this.person).subscribe(function (data) {
            _this.search_result = data['results'];
        });
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/people/people.service.ts":
/*!******************************************!*\
  !*** ./src/app/people/people.service.ts ***!
  \******************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PeopleService = /** @class */ (function () {
    function PeopleService(_http) {
        this._http = _http;
        this.api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
        this.people_url = 'https://api.themoviedb.org/3/';
    }
    PeopleService.prototype.getPeople = function () {
        return this._http.get(this.people_url + 'person/popular?api_key=' + this.api_key);
    };
    // getImage(){
    //   return this._http.get(this.people_url + 'person' + );
    // }
    PeopleService.prototype.getDetail = function (id) {
        return this._http.get(this.people_url + 'person/' + id + '?api_key=' + this.api_key);
    };
    PeopleService.prototype.getCrew = function (id) {
        return this._http.get(this.people_url + 'person/' + id + '/movie_credits?api_key=' + this.api_key);
    };
    PeopleService.prototype.searchPerson = function (person) {
        this.person_string = person;
        return this._http.get(this.people_url + 'search/person?api_key=' + this.api_key + '&language=en-US&query=' + this.person_string);
    };
    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/save/data-storage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/save/data-storage.service.ts ***!
  \**********************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies/movies.service */ "./src/app/movies/movies.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





// import 'rxjs/Rx';
// import 'rxjs/Rx';
var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, movieService) {
        this.httpClient = httpClient;
        this.movieService = movieService;
    }
    DataStorageService.prototype.storeMovies = function () {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('PUT', 'https://moviepedia-4211a.firebaseio.com/movies.json', this.movieService.getMovies(), { reportProgress: true });
        return this.httpClient.request(req);
    };
    DataStorageService.prototype.getMovies = function () {
        var _this = this;
        this.httpClient.get('https://moviepedia-4211a.firebaseio.com/movies.json', {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (movies) {
            console.log(movies);
            return movies;
        }))
            .subscribe(function (movies) {
            _this.movieService.setMovies(movies);
        });
    };
    DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\Projects\Moviepedia\moviepedia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map