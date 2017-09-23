module Fighter {
    
    declare var GollaherGamesService: any;

    export class FighterViewModel {

        public Cards: KnockoutObservableArray<CardModel> = ko.observableArray([]);
        public DisplayErrorMessage: KnockoutObservable<boolean> = ko.observable(false);
        public LoadInProgress: KnockoutObservable<boolean> = ko.observable(true);
        public ErrorMessage: KnockoutObservable<string> = ko.observable("");

        public constructor() {
            this.GetIcons();
        }

        private GetIcons() {
            this.LoadInProgress(true);
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "wiiusmash4/card",
                contentType: "application/json; charset=utf-8",
                success: (data) => { this.GetIconsSuccess(data); },
                error: () => { this.GetIconsFailure() }
            });
        }
        
        private GetIconsSuccess(data: any) {
            for (let i = 0; i < data.length; i++) {
                this.Cards.push(new Fighter.CardModel(data[i]));
            }
            this.LoadInProgress(false);
        }

        private GetIconsFailure()
        {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        }
    }
}