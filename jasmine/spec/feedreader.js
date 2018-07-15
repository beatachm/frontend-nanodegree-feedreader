$(function() {
    describe('RSS Feeds', function() {

        /* allFeeds variable should be defined and not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* All entries of allFeeds array should have 
         * defined and not empty urls.
         */
        it('have defined URLs', function(){
            allFeeds.map(function(f) {
                expect(f.url).toBeDefined();

                expect(f.name.url.length).not.toBe(0);
            });
        });


        /* All entries of allFeeds array should have 
         * defined and not empty names.
         */
        it('have defined names', function(){
            allFeeds.map(function(f) {
                expect(f.name).toBeDefined();

                expect(f.name.length).not.toBe(0);
            });
        });
    });

    describe('The Menu', function(){
        
        /* Menu should be hidden by default
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Menu should toggle on click
          */
         it('toggles on click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function(){
        /* When loaded, there should be at least one entry
         */
        it('are loaded', function(done){
            loadFeed(0, function() {
                expect($('.feed .entry').length > 0).toBe(true);
                done();
            });
        });
    });

    describe('New Feed Selection', function(){
        /* Entries should change when a different feed is loaded
         */
        it('actually changes the content', function(done){
            loadFeed(0, function(){
                var originalContent = $('.feed .entry h2').first().text();
                loadFeed(1, function(){
                    expect($('.feed .entry h2').first().text()).not.toBe(originalContent);
                    done();
                });
            });
            
        });
    });
}());
