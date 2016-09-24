

require(['./Component.js'], () => {
    let mainContainer = $('.main-container')[0];
    let searchComponent = new Component(
        '/AirTicket/Search.html',
        mainContainer,
        new HistoryState('search'),
        ['./AirTicket/search.js']
    );

    let confirmComponent = new Component(
        './AirTicket/confirm.html',
        mainContainer,
        new HistoryState('confirm'),
        ['']
    );
    $().ready(() => {
        // searchComponent.Load();
        confirmComponent.Load();
    });
});