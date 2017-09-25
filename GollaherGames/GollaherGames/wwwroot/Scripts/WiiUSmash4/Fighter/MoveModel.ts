module Fighter {
    export class MoveModel {
        public Name: KnockoutObservable<string> = ko.observable("");
        public AbilityFramePictureUrls: KnockoutObservableArray<string> = ko.observableArray([]);
        public SelectedAbilityFramePictureIndex: KnockoutObservable<number> = ko.observable(0);
        public SelectedAbilityFramePictureUrl = ko.computed(function () {
            return this.AbilityFramePictureUrls()[this.SelectedAbilityFramePictureIndex()];
        }, this);
    }

    export class AttackModel extends MoveModel {
        public HitboxActiveRange: KnockoutObservable<string> = ko.observable("");
        public FirstActionableFrame: KnockoutObservable<string> = ko.observable("");
        public BaseDamage: KnockoutObservable<string> = ko.observable("");
        public ShieldDamage: KnockoutObservable<string> = ko.observable("");
        public Angle: KnockoutObservable<string> = ko.observable("");
        public BaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public WeightBaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public KnockBackGrowth: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.BaseDamage(data.BaseDamage);
                this.ShieldDamage(data.ShieldDamage);
                this.Angle(data.Angle);
                this.BaseKnockBack(data.BaseKnockBack);
                this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                this.KnockBackGrowth(data.KnockBackGrowth);
            }
        }
    }

    export class GrabModel extends MoveModel {
        public HitboxActiveRange: KnockoutObservable<string> = ko.observable("");
        public FirstActionableFrame: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.HitboxActiveRange(data.HitboxActiveRange);
                this.FirstActionableFrame(data.FirstActionableFrame);
            }
        }
    }

    export class ThrowModel extends MoveModel {
        public WeightDependent: KnockoutObservable<boolean> = ko.observable(false);
        public BaseDamage: KnockoutObservable<string> = ko.observable("");
        public ShieldDamage: KnockoutObservable<string> = ko.observable("");
        public Angle: KnockoutObservable<string> = ko.observable("");
        public BaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public KnockBackGrowth: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.WeightDependent(data.WeightDependent);
                this.BaseDamage(data.BaseDamage);
                this.ShieldDamage(data.ShieldDamage);
                this.Angle(data.Angle);
                this.BaseKnockBack(data.BaseKnockBack);
                this.KnockBackGrowth(data.KnockBackGrowth);
            }
        }
    }

    export class RollModel extends MoveModel {
        public Intangibility: KnockoutObservable<string> = ko.observable("");
        public FirstActionableFrame: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.Intangibility(data.Intangibility);
                this.FirstActionableFrame(data.FirstActionableFrame);
            }
        }
    }

    export class AerialModel extends MoveModel {
        public HitboxActiveRange: KnockoutObservable<string> = ko.observable("");
        public FirstActionableFrame: KnockoutObservable<string> = ko.observable("");
        public BaseDamage: KnockoutObservable<string> = ko.observable("");
        public ShieldDamage: KnockoutObservable<string> = ko.observable("");
        public Angle: KnockoutObservable<string> = ko.observable("");
        public BaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public WeightBaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public KnockBackGrowth: KnockoutObservable<string> = ko.observable("");
        public LandingLag: KnockoutObservable<string> = ko.observable("");
        public AutoCancelFrames: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.BaseDamage(data.BaseDamage);
                this.ShieldDamage(data.ShieldDamage);
                this.Angle(data.Angle);
                this.BaseKnockBack(data.BaseKnockBack);
                this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                this.KnockBackGrowth(data.KnockBackGrowth);
                this.LandingLag(data.LandingLag);
                this.AutoCancelFrames(data.AutoCancelFrames);
            }
        }
    }

    export class SpecialModel extends MoveModel {
        public HitboxActiveRange: KnockoutObservable<string> = ko.observable("");
        public FirstActionableFrame: KnockoutObservable<string> = ko.observable("");
        public BaseDamage: KnockoutObservable<string> = ko.observable("");
        public ShieldDamage: KnockoutObservable<string> = ko.observable("");
        public Angle: KnockoutObservable<string> = ko.observable("");
        public BaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public WeightBaseKnockBack: KnockoutObservable<string> = ko.observable("");
        public KnockBackGrowth: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            super();
            if (data) {
                this.Name(data.Name);
                this.AbilityFramePictureUrls(data.AbilityFramePictureUrls);
                this.BaseDamage(data.BaseDamage);
                this.ShieldDamage(data.ShieldDamage);
                this.Angle(data.Angle);
                this.BaseKnockBack(data.BaseKnockBack);
                this.WeightBaseKnockBack(data.WeightBaseKnockBack);
                this.KnockBackGrowth(data.KnockBackGrowth);
            }
        }
    }
}