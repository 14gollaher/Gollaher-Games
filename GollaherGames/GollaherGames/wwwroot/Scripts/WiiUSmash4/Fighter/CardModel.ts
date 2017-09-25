module Fighter {
    export class CardModel {
        public FighterId: KnockoutObservable<number> = ko.observable(0);
        public Name: KnockoutObservable<string> = ko.observable("");
        public Title: KnockoutObservable<string> = ko.observable("");
        public PortraitUrl: KnockoutObservable<string> = ko.observable("");

        public constructor(data?: any) {
            if (data) {
                this.FighterId(data.FighterId);
                this.Name(data.Name);
                this.Title(data.Title);
                this.PortraitUrl(data.PortraitUrl);
            }
        }
    }
}