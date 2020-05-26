module.exports = {
  name: 'music-feature-playlist',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music/feature-playlist',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
