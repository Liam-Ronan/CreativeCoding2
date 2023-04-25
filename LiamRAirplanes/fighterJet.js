

class fighterJet extends Airplane {
    constructor(_size = 1.2) {
        super()
        this.size = _size
    }

    render() {
        scale(this.size)
        super.drawPlane()
    }
}