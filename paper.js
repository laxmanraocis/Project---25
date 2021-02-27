class Paper
{
	constructor(x,y)
	{
		var options={
			restitution:0.5,
            density:0.8,			
        }

		
		this.body=Bodies.rectangle(x, y, 50 , 50 , options);
        this.image = loadImage("paper.png");
        this.w = 50;
        this.h = 50;
 		World.add(world, this.body);

	}
	display(){
			
			var pos = this.body.position;
            var angle = this.body.angle;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
            rotate(angle);
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}
