export class ItemController {
    static createItem = async (req, res) => {
        console.log(`Item created`);
    }

    static getItem = async (req, res) => {
        console.log(`Item fetched`);
    }

    static getItemById = async (req, res) => {
        console.log(`Item fetched by id: ${req.params.id}`);
    }

    static updateItem = async (req, res) => {
        console.log(`Item updated`);
    }

    static deleteItem = async (req, res) => {
        console.log(`Item deleted`);
    }
}