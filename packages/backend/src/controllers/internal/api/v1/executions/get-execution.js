import { renderObject } from '@/helpers/renderer.js';

export default async (request, response) => {
  const execution = await request.currentUser.readableExecutions
    .clone()
    .withGraphFetched({
      flow: {
        steps: true,
      },
    })
    .withSoftDeleted()
    .findById(request.params.executionId)
    .throwIfNotFound();

  renderObject(response, execution);
};
