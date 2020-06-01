class obstacle{
    constructor(){
        this.button;
    }
    obs(x,y){
        fill('red');
        rect(x,y,10,40);
        this.button=createButton('reset');
        this.button.position(100,100);
        this.button.mousePressed(()=>{
        state=0;
    database.ref('first').update({
        state:'on'
      });
      database.ref('second').update({
          state:'on'
        });
        
    database.ref('/').update({
        no:'first'
      }); 
      xo=1440;
    });
    }}