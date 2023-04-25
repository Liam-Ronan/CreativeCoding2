

class jumboJet extends Airplane {
    constructor(_size = 1.6) {
        super()
        this.size = _size
    }

    render() {
        scale(this.size)
        super.drawPlane()
    }
}