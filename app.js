// write code here
        const cars = ['volvo', 'toyota', 'honda', 'ford'];
        const hondaIndex = cars.indexOf('honda');
        
        if (hondaIndex !== -1) {
        cars.splice(hondaIndex + 1, 0, 'mazda', 'bmw', 'nissan');
        }
        
        console.log(cars); // ["volvo", "toyota", "honda", "mazda", "bmw", "nissan", "ford"]
