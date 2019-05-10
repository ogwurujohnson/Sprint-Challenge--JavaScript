// 1. Copy and paste your prototype in here and refactor into class syntax.

/**
 * @author Johnson Ogwuru
 *
 * @class CubeMaker
 */
class CuboidMaker {
  /**
   *Creates an instance of CubeMaker.
   * @param {*} attributes
   * @memberof CubeMaker
   */
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  /**
   * @method volume()
   *
   * @returns
   * @memberof CubeMaker
   */
  volume() {
    return this.length * this.width * this.height;
  }

  /**
   * @method surfaceArea()
   *
   * @returns
   * @memberof CubeMaker
   */
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('-----parent class------');
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
// surface area =  6s^2
// volume = length^3

/**
 *
 *
 * @class CubeMaker
 * @extends {CuboidMaker}
 */
class CubeMaker extends CuboidMaker {
  constructor(cubeMakerattributes) {
    super(cubeMakerattributes);
  }

  /**
   * @method volume
   *
   * @returns
   * @memberof CubeMaker
   */
  volume() {
    return this.length * this.length * this.length;
  }

  /**
   * @method surfaceArea
   *
   * @returns
   * @memberof CubeMaker
   */
  surfaceArea() {
    return 6 * (this.length * this.length);
  }
}

const mycube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log('------class child-------')
console.log(mycube.volume());
console.log(mycube.surfaceArea());