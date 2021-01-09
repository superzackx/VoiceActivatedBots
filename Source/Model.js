class Model {
    constructor(args) {
        this.args = []
        for (arg of args) {
            this.args.push(arg)
        }
        return this.getArgs(); 
    }
    getArgs() {return this.args}
}
export default Model; 