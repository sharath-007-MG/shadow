import game from '@fakerjs/game';

game({locale: 'en_US'}).title();
//=> Half-Life 
// Allowed locale: en_US

game().title();
//=> Half-Life 

game().genre();
//=> Action

game().platform();
//=> Windows 