class PageTools {
    public DisplayErrorMessage: KnockoutObservable<boolean> = ko.observable(false);
    public LoadInProgress: KnockoutObservable<boolean> = ko.observable(true);
    public ErrorMessage: KnockoutObservable<string> = ko.observable("");
}   
