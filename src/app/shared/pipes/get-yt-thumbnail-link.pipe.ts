import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getYtThumbnailLink',
})
export class GetYtThumbnailLinkPipe implements PipeTransform {
  transform(videoId: string): string {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }
}
