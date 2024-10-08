import CreativeEditorSDK from '../node_modules/@cesdk/cesdk-js/index.js';

const config = {
  license: 'mtLT-_GJwMhE7LDnO8KKEma7qSuzWuDxiKuQcxHKmz3fjaXWY2lT3o3Z2VdL5twm',
  userId: 'guides-user',
  // Serve assets from IMG.LY cdn or locally
  // baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.35.1/assets',
  baseURL: '/public/cesdk/engine',
  locale: 'en',
};

CreativeEditorSDK.create('#cesdk_container', config).then(async (instance) => {
  await instance.addDefaultAssetSources({
    baseURL: '/public/cesdk/assets/',
    excludeAssetSourceIds: [
      'ly.img.vectorpath',
      'ly.img.filter.duotone',
      'ly.img.filter.lut',
      'ly.img.sticker',
      'ly.img.image',
      'ly.img.colors.defaultPalette',
      'ly.img.effect',
      'ly.img.blur',
    ],
  });

  const engine = instance.engine;
  const scene = engine.scene.create();
  const page = engine.block.create('page');
  engine.block.appendChild(scene, page);
});
