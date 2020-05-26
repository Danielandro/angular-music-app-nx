module.exports = {
  name: 'music-util-guards',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music/util-guards',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
