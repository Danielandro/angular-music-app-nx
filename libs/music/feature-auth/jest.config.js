module.exports = {
  name: 'music-feature-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music/feature-auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
