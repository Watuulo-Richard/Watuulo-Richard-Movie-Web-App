'use strict';

/**
 * movie-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-profile.movie-profile');
