/** @typedef {import('../types/main.js').Plugin} Plugin */

/**
 * @param {import('../types/main.js').Plugin} plugin
 */
export function removePlugin(plugin) {
  /**
   * @template {Function} T
   * @param {import('../types/main.js').MetaPlugin<T>[]} plugins
   */
  const removePluginFn = plugins => {
    const index = plugins.findIndex(pluginObj => pluginObj.plugin === plugin);

    if (index === -1) {
      throw new Error(`Could not find a plugin with the name "${plugin.name}" to remove.`);
    }

    plugins.splice(index, 1);

    return plugins;
  };
  return removePluginFn;
}
