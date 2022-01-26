const output = document.createElement('p');
output.setAttribute('class', 'answer');
output.style.backgroundColor = "yellow";
output.style.width = "500px";
output.style.height = "50px";
output.style.textAlign = "center";

setTimeout(() => {
    output.innerHTML = "<h1>10</h1>";
    setTimeout(() => {
        output.innerHTML = "<h1>9</h1>";
        setTimeout(() => {
            output.innerHTML = "<h1>8</h1>";
            setTimeout(() => {
                output.innerHTML = "<h1>7</h1>";
                setTimeout(() => {
                    output.innerHTML = "<h1>6</h1>";
                    setTimeout(() => {
                        output.innerHTML = "<h1>5</h1>";
                        setTimeout(() => {
                            output.innerHTML = "<h1>4</h1>";
                            setTimeout(() => {
                                output.innerHTML = "<h1>3</h1>";
                                setTimeout(() => {
                                    output.innerHTML = "<h1>2</h1>";
                                    setTimeout(() => {
                                        output.innerHTML = "<h1>1</h1>";
                                        setTimeout(() => {
                                            output.innerHTML = "<h1>Happy Independence Day!!!</h1>";
                                        });
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

document.body.append(output);