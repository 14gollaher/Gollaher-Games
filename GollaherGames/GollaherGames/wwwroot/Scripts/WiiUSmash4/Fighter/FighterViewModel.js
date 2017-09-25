var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fighter;
(function (Fighter) {
    var FighterViewModel = (function (_super) {
        __extends(FighterViewModel, _super);
        function FighterViewModel() {
            var _this = _super.call(this) || this;
            _this.Cards = ko.observableArray([]);
            _this.SelectedFighter = ko.observable(new Fighter.FighterModel());
            _this.DisplayFighterDetails = ko.observable(false);
            _this.SearchQuery = ko.observable("");
            _this.AbilityTypes = ko.observable("");
            _this.FilteredCards = ko.computed(function () {
                var filter = this.SearchQuery().replace(/[.,\/#!$%\@^&\*;:{}=\-_`~()]/g, "").toLowerCase();
                if (!filter) {
                    return this.Cards();
                }
                else {
                    return ko.utils.arrayFilter(this.Cards(), function (item) {
                        return item.Name().replace(/[.,\/#!$%\^&@\*;:{}=\-_`~()]/g, "").toLowerCase().indexOf(filter) !== -1;
                    });
                }
            }, _this);
            _this.GetAbilityTypes();
            _this.GetIcons();
            return _this;
        }
        FighterViewModel.prototype.IncrementCurrentSelectedAbilityFrame = function (data) {
            var currentFrame = data.SelectedAbilityFramePictureIndex();
            var totalFrames = data.AbilityFramePictureUrls().length;
            if (currentFrame < totalFrames - 1) {
                data.SelectedAbilityFramePictureIndex(data.SelectedAbilityFramePictureIndex() + 1);
            }
            //$('.tree').treegrid({
            //    'saveState': true,
            //});
        };
        FighterViewModel.prototype.DecrementCurrentSelectedAbilityFrame = function (data) {
            var currentFrame = data.SelectedAbilityFramePictureIndex();
            if (currentFrame > 0) {
                data.SelectedAbilityFramePictureIndex(data.SelectedAbilityFramePictureIndex() - 1);
            }
            //$('.tree').treegrid({
            //    'saveState': true,
            //});
        };
        FighterViewModel.prototype.SetSelectedFighter = function (data) {
            this.LoadInProgress(true);
            this.GetFighter(data);
        };
        FighterViewModel.prototype.GetFighter = function (fighterId) {
            var _this = this;
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/Fighter/" + fighterId,
                contentType: "application/json; charset=utf-8",
                success: function (data) { _this.GetFighterSuccess(data); },
                error: function () { _this.GetFighterFailure(); }
            });
        };
        FighterViewModel.prototype.GetFighterSuccess = function (data) {
            this.SelectedFighter(new Fighter.FighterModel(data));
            this.LoadInProgress(false);
            this.DisplayFighterDetails(true);
            $('.tree').treegrid({
                'initialState': 'collapsed',
            });
        };
        FighterViewModel.prototype.GetFighterFailure = function () {
            this.ErrorMessage("Error loading fighter.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        };
        FighterViewModel.prototype.GetIcons = function () {
            var _this = this;
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/Card",
                contentType: "application/json; charset=utf-8",
                success: function (data) { _this.GetIconsSuccess(data); },
                error: function () { _this.GetIconsFailure(); }
            });
        };
        FighterViewModel.prototype.GetIconsSuccess = function (data) {
            for (var i = 0; i < data.length; i++) {
                this.Cards.push(new Fighter.CardModel(data[i]));
            }
            this.LoadInProgress(false);
        };
        FighterViewModel.prototype.GetIconsFailure = function () {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        };
        FighterViewModel.prototype.GetAbilityTypes = function () {
            var _this = this;
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/AbilityType",
                contentType: "application/json; charset=utf-8",
                success: function (data) { _this.GetAbilityTypesSuccess(data); },
                error: function () { _this.GetAbilityTypesFailure(); }
            });
        };
        FighterViewModel.prototype.GetAbilityTypesSuccess = function (data) {
            //for (let i = 0; i < data.length; i++) {
            //    this.AbilityTypes.push(data[i]);
            //}
        };
        FighterViewModel.prototype.GetAbilityTypesFailure = function () {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
        };
        return FighterViewModel;
    }(PageTools));
    Fighter.FighterViewModel = FighterViewModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=FighterViewModel.js.map