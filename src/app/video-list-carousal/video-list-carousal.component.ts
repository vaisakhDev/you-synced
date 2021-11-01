import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list-carousal',
  templateUrl: './video-list-carousal.component.html',
  styleUrls: ['./video-list-carousal.component.scss']
})
export class VideoListCarousalComponent implements OnInit {
  public urls: Array<string> = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KG6v7LT4oIbwoRftfML9LAHaLH%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uB69-lgpocj0V7GlsINHsgHaK9%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9OyYZ01pKrF5irfBj4-csgHaKX%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dicfyV_Gq7oBKBuZqR6EBQHaK-%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1_A1JNmBN93W8P7DTHPDKgHaLH%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RrqIaO520Q9Xs3DZh52bzAHaNK%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W8Lrl_3fTa5TRtcxFncQ2AHaK-%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GLsIxv6_63MdMUVnd_yKiAHaK-%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GLsIxv6_63MdMUVnd_yKiAHaK-%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mIb2jmQOob5ArXQh1u3fTgHaK-%26pid%3DApi&f=1"]

  constructor() { }

  ngOnInit(): void {
  }

}
