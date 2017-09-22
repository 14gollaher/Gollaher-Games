module Fighter {
    export class IconModel {
        public FighterId: KnockoutObservable<number> = ko.observable(0);
        public Name: KnockoutObservable<string> = ko.observable("");
        public IconUrl: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            if (data) {
                this.FighterId(data.FighterId);
                this.Name(data.Name);
                this.IconUrl(data.IconUrl);
            }
        }
    }
}
