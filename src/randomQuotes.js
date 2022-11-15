import Quotes from "./quotes.json";
export default class RandomQuotes {
    getAll() {
        return JSON.parse(Quotes);
    }

    getRandom(length = 1) {
        let t = [];
        //   Check if length parameter more than quotes data length
        if (length > Quotes.length) {
            console.warn(
                "Quotes paramter is more than quotes data length, changing length parameter to data length"
            );
            length = Quotes.length;
        }
        for (let i = 0; i < length; i++) {
            let exist = true;
            do {
                let q = Quotes[Math.floor(Math.random() * Quotes.length)];
                if (t.indexOf(q) >= 0) {
                    // If exist
                    console.warn(
                        "Quotes is already exist on temporary variable, regenrating random quotes"
                    );
                } else {
                    t.push(q);
                    exist = false;
                }
            } while (exist);
        }
        return t;
    }
}
