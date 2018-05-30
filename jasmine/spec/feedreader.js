$(function() {
    
    describe('RSS Feeds', function() {
    
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    //Loop through allFeeds and test whether the url and name values are defined and not empty.
        it('urls are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('names are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
        
    });

//Test suite for the menu:
    describe('The menu', function() {
        const body = document.body;
        const bodyList = body.classList;
        const hamburger = document.getElementsByClassName('menu-icon-link');
        const hambIcon = $('.menu-icon-link');
        
        //Test whether the menu is hidden by default
        it('is hidden by default', function() {
            expect(bodyList).toContain('menu-hidden');
        });

        //Test whether the menu toggles open and closed when the hamburger icon is clicked.
        //idea from here: https://stackoverflow.com/questions/38879599/how-do-i-trigger-a-click-event-in-a-jasmine-unit-test-for-an-angular-directive
        it('toggles visibility when clicked', function() {
           
            //if the menu icon is clicked once, the menu should appear
                hambIcon.click();
                expect(bodyList).not.toContain('menu-hidden');
            //if the icon is clicked again, the menu should disappear
                hambIcon.click();
                expect(bodyList).toContain('menu-hidden');
        
        });
    });
   
    describe('Initial Entries', function() {
            
        //Once the loadFeed function has finished running
        beforeEach(function(done){
            loadFeed(0, done);
        });
        
        //there is at least one item in the feed.
        it('container is not empty', function(done) {
            let entries = document.getElementsByClassName('entry');
            expect(entries).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
//        * TODO: Write a test that ensures when a new feed is loaded
//         * by the loadFeed function that the content actually changes.
//         * Remember, loadFeed() is asynchronous.
//         */
            let content1,
                content2;
        
        beforeEach(function(done){
            //Once the loadFeed function has finished runnning once, collect content
            loadFeed(0, function() {
                content1 = document.querySelector('.feed').innerHTML;
            //collect content again after loading the second time
                    loadFeed(1, function() {
                    content2 = document.querySelector('.feed').innerHTML;
                    done();
                    });
            });
        });

        
        it('feed content changes on load', function(done) {
            expect(content1).not.toBe(content2);
            done();
        });        
    });
        
}());
