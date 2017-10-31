var Curl = require( 'node-libcurl' ).Curl;

var curl = new Curl();

curl.setOpt( 'URL', 'https://api.transmitsms.com/send-sms.json \
-u ae559db613f7b722e21c7b1108037c46:secret \
-d "message=Hi Shiyas." \
-d to=61432827735' );

curl.setOpt( 'FOLLOWLOCATION', true );

curl.on( 'end', function( statusCode, body, headers ) {

   console.info( statusCode );
   console.info( '---' );
   console.info( body.length );
   console.info( '---' );
   console.info( this.getInfo( 'TOTAL_TIME' ) );

   this.close();
});

curl.on( 'error', curl.close.bind( curl ) );
curl.perform();

