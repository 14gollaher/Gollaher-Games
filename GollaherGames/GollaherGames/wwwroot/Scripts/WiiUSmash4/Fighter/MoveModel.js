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
    var MoveModel = (function () {
        function MoveModel() {
            this.Name = ko.observable("");
            this.AbilityFramePictureUrls = ko.observableArray([]);
            this.SelectedAbilityFramePictureIndex = ko.observable(0);
            this.SelectedAbilityFramePictureUrl = ko.computed(function () {
                return this.AbilityFramePictureUrls()[this.SelectedAbilityFramePictureIndex()];
            }, this);
        }
        return MoveModel;
    }());
    Fighter.MoveModel = MoveModel;
    var AttackModel = (function (_super) {
        __extends(AttackModel, _super);
        function AttackModel(data) {
            var _this = _super.call(this) || this;
            _this.HitboxActiveRange = ko.observable("");
            _this.FirstActionableFrame = ko.observable("");
            _this.BaseDamage = ko.observable("");
            _this.ShieldDamage = ko.observable("");
            _this.Angle = ko.observable("");
            _this.BaseKnockBack = ko.observable("");
            _this.WeightBaseKnockBack = ko.observable("");
            _this.KnockBackGrowth = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.BaseDamage(data.BaseDamage);
                _this.ShieldDamage(data.ShieldDamage);
                _this.Angle(data.Angle);
                _this.BaseKnockBack(data.BaseKnockBack);
                _this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                _this.KnockBackGrowth(data.KnockBackGrowth);
            }
            return _this;
        }
        return AttackModel;
    }(MoveModel));
    Fighter.AttackModel = AttackModel;
    var GrabModel = (function (_super) {
        __extends(GrabModel, _super);
        function GrabModel(data) {
            var _this = _super.call(this) || this;
            _this.HitboxActiveRange = ko.observable("");
            _this.FirstActionableFrame = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.HitboxActiveRange(data.HitboxActiveRange);
                _this.FirstActionableFrame(data.FirstActionableFrame);
            }
            return _this;
        }
        return GrabModel;
    }(MoveModel));
    Fighter.GrabModel = GrabModel;
    var ThrowModel = (function (_super) {
        __extends(ThrowModel, _super);
        function ThrowModel(data) {
            var _this = _super.call(this) || this;
            _this.WeightDependent = ko.observable(false);
            _this.BaseDamage = ko.observable("");
            _this.ShieldDamage = ko.observable("");
            _this.Angle = ko.observable("");
            _this.BaseKnockBack = ko.observable("");
            _this.KnockBackGrowth = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.WeightDependent(data.WeightDependent);
                _this.BaseDamage(data.BaseDamage);
                _this.ShieldDamage(data.ShieldDamage);
                _this.Angle(data.Angle);
                _this.BaseKnockBack(data.BaseKnockBack);
                _this.KnockBackGrowth(data.KnockBackGrowth);
            }
            return _this;
        }
        return ThrowModel;
    }(MoveModel));
    Fighter.ThrowModel = ThrowModel;
    var RollModel = (function (_super) {
        __extends(RollModel, _super);
        function RollModel(data) {
            var _this = _super.call(this) || this;
            _this.Intangibility = ko.observable("");
            _this.FirstActionableFrame = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.Intangibility(data.Intangibility);
                _this.FirstActionableFrame(data.FirstActionableFrame);
            }
            return _this;
        }
        return RollModel;
    }(MoveModel));
    Fighter.RollModel = RollModel;
    var AerialModel = (function (_super) {
        __extends(AerialModel, _super);
        function AerialModel(data) {
            var _this = _super.call(this) || this;
            _this.HitboxActiveRange = ko.observable("");
            _this.FirstActionableFrame = ko.observable("");
            _this.BaseDamage = ko.observable("");
            _this.ShieldDamage = ko.observable("");
            _this.Angle = ko.observable("");
            _this.BaseKnockBack = ko.observable("");
            _this.WeightBaseKnockBack = ko.observable("");
            _this.KnockBackGrowth = ko.observable("");
            _this.LandingLag = ko.observable("");
            _this.AutoCancelFrames = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.BaseDamage(data.BaseDamage);
                _this.ShieldDamage(data.ShieldDamage);
                _this.Angle(data.Angle);
                _this.BaseKnockBack(data.BaseKnockBack);
                _this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                _this.KnockBackGrowth(data.KnockBackGrowth);
                _this.LandingLag(data.LandingLag);
                _this.AutoCancelFrames(data.AutoCancelFrames);
            }
            return _this;
        }
        return AerialModel;
    }(MoveModel));
    Fighter.AerialModel = AerialModel;
    var SpecialModel = (function (_super) {
        __extends(SpecialModel, _super);
        function SpecialModel(data) {
            var _this = _super.call(this) || this;
            _this.HitboxActiveRange = ko.observable("");
            _this.FirstActionableFrame = ko.observable("");
            _this.BaseDamage = ko.observable("");
            _this.ShieldDamage = ko.observable("");
            _this.Angle = ko.observable("");
            _this.BaseKnockBack = ko.observable("");
            _this.WeightBaseKnockBack = ko.observable("");
            _this.KnockBackGrowth = ko.observable("");
            if (data) {
                _this.Name(data.Name);
                _this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                _this.BaseDamage(data.BaseDamage);
                _this.ShieldDamage(data.ShieldDamage);
                _this.Angle(data.Angle);
                _this.BaseKnockBack(data.BaseKnockBack);
                _this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                _this.KnockBackGrowth(data.KnockBackGrowth);
            }
            return _this;
        }
        return SpecialModel;
    }(MoveModel));
    Fighter.SpecialModel = SpecialModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=MoveModel.js.map