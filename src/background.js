// import Game from './game'
export default class Background {
                 constructor() {
                   this.ctx = canvas.getContext("2d");
                   this.width = 960;
                   this.height = 640;
                   this.backgroundImage = new Image();
                   this.backgroundImage.src = "./src/background.png";
                //    this.backgroundImage.onload = this.some;
                   this.backgroundWidth = 0;
                   this.backgroundHeight = 0;
                   this.initHeight = 0;
                   this.scrollSpeed = 3;
                 }

                 some(ctx) {
                    //   let width = this.width;
                    //   let height = this.height;
                    //       let scrollSpeed = 4;

                    //     this.ctx.clearRect(0, 0, canvas.width, canvas.height);
                    //   this.ctx.drawImage(this.backgroundImage, 0, this.initHeight, width, height);
                    //   this.ctx.drawImage(
                    //     this.backgroundImage,
                    //     0,
                    //     this.initHeight - width,
                    //     width,
                    //     height
                    //   );
                        // ctx.fillStyle = "skyblue";
                        // ctx.fillRect(
                        //   0,
                        //   0,
                        //   960,
                        //   640
                        // );




                    //   this.initHeight += scrollSpeed;

                    //   if (this.initHeight == width) {this.initHeight = 0 };
                    //   requestAnimationFrame(this.some.bind(this));

                //    let backgroundWidth = this.width;
                //    let backgroundHeight = this.height;
                //    let width = backgroundWidth;
                //    let height = backgroundHeight;
                // //    this.draw;
                // console.log(this.draw())
                //  }
                //  draw() {
                //    this.ctx.clearRect(0, 0, 960, 640);
                //    if (this.initHeight >= 960) this.initHeight = 0;
                //    this.initHeight += this.scrollSpeed;
                //    this.ctx.drawImage(
                //      this.backgroundImage,
                //      (960 - this.initHeight),
                //      0,
                //      this.initHeight,
                //      this.backgroundHeight,
                //      0,
                //      0,
                //      this.initHeight,
                //      this.backgroundHeight
                //    );
                //    this.ctx.drawImage(
                //      this.backgroundImage,
                //      this.initHeight,
                //      0,
                //      this.backgroundWidth,
                //      this.backgroundHeight
                //    );
                //        setTimeout(function() {
                //          this.draw.bind(this);
                //        }, 10);

                 }


                 //    requestAnimationFrame(this.draw.bind(this));

                 animate() {
                   this.some();
                //    console.log(this)

                 }
               }