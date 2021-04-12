import { FunctionComponent } from 'react';

import RenderGraphicProps from './RenderGraphicProps';

type RoleItem = {
  name: string;
  RenderGraphic: FunctionComponent<RenderGraphicProps>;
};

export default RoleItem;
