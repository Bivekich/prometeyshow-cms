import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutCompany extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_companies';
  info: {
    displayName: 'About Company';
  };
  attributes: {
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsEvents extends Struct.ComponentSchema {
  collectionName: 'components_sections_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.Time & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNumbers extends Struct.ComponentSchema {
  collectionName: 'components_sections_numbers';
  info: {
    displayName: 'Numbers';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVideoBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_banners';
  info: {
    displayName: 'Video Banner';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-company': SectionsAboutCompany;
      'sections.events': SectionsEvents;
      'sections.numbers': SectionsNumbers;
      'sections.services': SectionsServices;
      'sections.video-banner': SectionsVideoBanner;
    }
  }
}
