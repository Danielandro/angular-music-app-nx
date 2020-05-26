module.exports = {
  name: 'music-data-access-playlist',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music/data-access-playlist',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
