---
title: ［Pythonクイズ］リスト内に同じ要素がそれぞれ何個あるか数えよう！　for文を使うのもいいけれど……
description: リストにどの要素が何個含まれているか、数えたいことってありますよね。もちろん、自分で書いても構いません。でも、あのモジュールのあのクラスを使うのがカンタンですよ。
pubDate: Tue, 17 Jun 2025 05:00:00 +0900
source: ITmedia AI
tags:
- japan
- itmedia
- ai
url: https://atmarkit.itmedia.co.jp/ait/articles/2506/17/news013.html
---

XgÉÇÌvfª½ÂÜÜêÄ¢é©A¦½¢±ÆÁÄ èÜ·æËBà¿ëñA©ªÅ¢Äà\¢Ü¹ñBÅàA ÌW [Ì ÌNXðg¤ÌªJ^Å·æB
@ÈºÍXgÉ¯êÌvfª½ñoê·é©ð¦ã°ÄAvfðL[A»ÌoêñðL[ÌlÆ·é«ðì¬·éR[hÅ éB±ÌR[hÍÓ}µ½ÊèÉ®ì·éBµ©µAPythonÉWÅt®µÄ¢é éW [Ì éNXðg¤Æ¯¶±Æª2sÅLqÅ«éB»ÌNXðgÁÄA±ÌR[hð«¼µÄÝæ¤B
items = ['foo', 'baz', 'bar', 'bar', 'bar', 'baz', 'bar']
counts = {}
for item in items:
c = counts.get(item, 0)
counts[item] = c + 1
print(counts) # {'foo': 1, 'baz': 2, 'bar': 4}
@Ç¤àHP©í³«Å·B
@æT±ñÈ±Æð«Üµ½Bu0 <= num < 10vÌæ¤È«ûÉÂ¢Äu±Ìæ¤È«ûªÅ«é¾êÍ ÜèÈ¢æ¤Å·vÆB»µ½çA^æècbR~ª èÜµÄABCPLiCÌæcÅ éBÌæcÉ½é¾êÆàjÅÍ±Ìæ¤È«ûª³êÄ¢é»¤Å·BBCPLðgÁ½±ÆªÈ©Á½ÌÅmèÜ¹ñÅµ½B
@https://www.cl.cam.ac.uk/~mr10/æè_E[hÂ\ÈBCPLÌ¾ê}j AwThe BCPL Cintsys and Cintpos User Guidexibcplman.pdfjÉÍuAn expression of the form: E relop E relop ... relop E where each relop is one of =, ~=, <=, >=, < or > returns TRUE if all the individual relations are satisfied and FALSE, otherwise.vÆ èÜ·BKÉó·ÆuE relop E relop ... relop Ei±±ÅrelopÍ»ê¼ê=A~=A<=A>=A<A>Ì¢¸ê©jÆ¢¤`Ì®ÍSÄÌÖWª½³êÄ¢êÎTRUEðA»¤ÅÈ¯êÎFALSEðÔ·vÆÈèÜ·B
@Æ¢¤í¯ÅABCPLÅàu0 <= num < 10vÌæ¤ÉärZðA½³¹é±ÆÍÂ\Å·B×ÉÈèÜµ½i½¾µABCPLnÌrhAR[hÌÀsÜÅÍµÄ¢È¢ÌÅA ÜÅà}j Að©½¾¯ÌbÅ·jB
@³ðÌR[háðÈºÉ¦µÜ·B
from collections import Counter
items = ['foo', 'baz', 'bar', 'bar', 'bar', 'baz', 'bar']
counts = Counter(items)
print(counts) # Counter({'bar': 4, 'baz': 2, 'foo': 1})
@±±ÅÍcollectionsW [ÌCounterNXðC|[gµÄA»ÌCX^X¶¬ÉXgðnµÄ¢Ü·B±êÉæèAXgÌvfð¦ã°ÄAvfðL[Ao»ñðlÆ·éCounterIuWFNgi«Æ¯lÈ}bsOIuWFNgjð¾Ä¢Ü·B
@±Ì¼ÉàitertoolsW [ÌgroupbyÖðg¤û@à èÜ·ªA±±ÅÍÐîÍµÜ¹ñiÈ¨AgroupbyÍÖÌæ¤ÉÄÑoµÄgpµÜ·ªA»ÌÀÌÍNXÅ·BPythonÁÄA»¤¢¤Ì½¢Å·æËjB
@PythonÉWÅt®·écollectionsW [ÉÍCounterNXªÜÜêÄ¢Ü·B±ÌNXÌ¶¬ÉXgiÈÇÌ½Â\IuWFNgjðn·ÆAevfÌoêñð¦ã°ÄêÜ·B
@âè¶ÌR[hÍÌæ¤ÈàÌÅµ½B
items = ['foo', 'baz', 'bar', 'bar', 'bar', 'baz', 'bar']
counts = {}
for item in items:
c = counts.get(item, 0)
counts[item] = c + 1
print(counts) # {'foo': 1, 'baz': 2, 'bar': 4}
@±±ÅÍXgÌvfð¦ã°Ä¢Ü·B'foo'Í1ÂA'bar'Í4ÂA'baz'Í2ÂÅ·B»±ÅACounterNXÌIuWFNgÌ¶¬É±êðnµÄâêÎ¯¶±ÆªÅ«éÆ¢¤±ÆÅ·B
from collections import Counter
items = ['foo', 'baz', 'bar', 'bar', 'bar', 'baz', 'bar']
counts = Counter(items)
print(counts) # Counter({'bar': 4, 'baz': 2, 'foo': 1})
@ÅÌR[hÅÍPythonÉgÝÝÌ«ªì¬³êÄ¢Üµ½ªA³ðáÌR[hÅÍCounterNXÌIuWFNgÉÈÁÄ¢é_ÉÓµÄ¾³¢B½¾µA¼ÒÍärÂ\Å·B
from collections import Counter
items = ['foo', 'baz', 'bar', 'bar', 'bar', 'baz', 'bar']
counts_dict = {}
for item in items:
c = counts_dict.get(item, 0)
counts_dict[item] = c + 1
counts_counter = Counter(items)
print(counts_dict == counts_counter) # True
@±±ÅÍâè¶Æ¯¶âèûÅ¦ã°½ÊÌ«ðcounts_dictÉACounterNXðgÁÄ¦ã°½Êðcounts_counterÉãüµÄA»êçªµ¢©ðµÄ¢Ü·B»ÌÊÍTrueÉÈèÜ·B¯¶^É»ë¦½¯êÎudict(counts_counter)v é¢ÍuCounter(counts_dict)vÌæ¤É·é±ÆàÂ\Å·B}bsOIuWFNgðgÁÄACounterNXÌIuWFNgð¶¬·éÆA»Ì}bsOIuWFNgÌL[^lÌÎª»ÌÜÜCounterNXÉ¨¯é»êÆÈèÜ·iR[háÍÈªjB
@«ÆCounterNXÌå«Èá¢ÆµÄÍ¶ÝµÈ¢L[ðp©Á±u[]vÉwèµ½êÌUé¢ª°çêÜ·B
print(counts_dict['hoge']) # KeyError
print(counts_counter['hoge']) # 0
@±ÌR[hÍAãÅì¬µ½counts_dictÆcounts_counterÉ¶ÝµÈ¢L[ðwèµÄA»Ìlð\¦µæ¤ÆµÄ¢Ü·B«ÅÍià¿ëñjKeyErroráOÉÈèÜ·ªACounterNXÌIuWFNgÅÍ0Æ\¦³êÜ·B
@Ü½Aupdate\bhÌUé¢Éà·ª èÜ·B«Ìupdate\bhÉ«i}bsOIuWFNgjðn·ÆA»ÌL[^lÌgª³Ì«É êÎAlðã«µÜ·ªACounterNXÅÍ»ÌlªÁZ³êÜ·BÜ½A«Ìupdate\bhÉãÅ©½itemsÌæ¤ÈXgÍn¹Ü¹ñªACounterNXÌupdate\bhÉXgðn·ÆAvfð¦ã°ÄAù¶ÌL[ÌlÉÂ¢ÄÍ»ÌlªÁZ³êÜ·BÈºÉáð¦µÜ·B
tmp_dict = {'baz': 3, 'qux': 6}
counts_dict.update(tmp_dict)
print(counts_dict) # {'foo': 1, 'baz': 3, 'bar': 4, 'qux': 6}
counts_counter.update(tmp_dict)
print(counts_counter) # Counter({'qux': 6, 'baz': 5, 'bar': 4, 'foo': 1})
@àÆàÆAcounts_dictàcounts_counterà'baz'L[ÌlÍ2Åµ½B»µÄAcounts_dict.update\bhÉ«{'baz': 3, 'qux': 6}ðn·ÆA'baz'L[Ìlªã«³êÄ3ÉÈèÜ·BêûAcounts_counter.updateÉ¯¶{'baz': 3, 'qux': 6}ðn·ÆA'baz'L[ÌlÅ é3ªÁZ³êÄAcounts_counter['baz']Í5ÉÈÁÄ¢Ü·B±êÜÅÉÈ©Á½L['qux'ÉÂ¢ÄÍ»êçªVKÉÇÁ³êÄ¢é_Í¼ÒÅ¯¶Å·B
@XgðÇÁ·éÆÌæ¤ÉÈèÜ·B
tmp_list = ['qux', 'quuux']
counts_dict.update(tmp_list) # ValueError
counts_counter.update(tmp_list)
print(counts_counter) # Counter({'qux': 7, 'baz': 5, 'bar': 4, 'foo': 1, 'quuux': 1})
@«Ìupdate\bhÉXgðn·ÆValueErroráOÆÈèÜ·ªACounterNXÌupdate\bhÅÍnµ½XgÌvfª¦ã°çêÄA»ÌlªÁZ³êÄ¢é±Æªª©èÜ·i[('foo', 0), ('bar', 1), ('ba', 2)]Ìæ¤È2ÂÌvf©çÈé½Â\IuWFNgðvfÆ·éXgÈç«Ìupdate\bhÉn¹é±ÆÉÍ¯ÓµÄ¾³¢jB
@Ü½ACounterNXÉÍL[ÌlÌ¾¯L[ð½·éCe[^ðÔ·elements\bhâlª½¢L[ðwèµ½¾¯\¦·émost_common\bhAL[Ìlð¸Z·ésubtract\bhAJEgÌvðvZ·étotal\bhà èÜ·BÈºÉ±êçÌ\bhÌgpáð¦µÜ·i±±ÅÍVKÉCounterIuWFNgðì¬µÄ¢Ü·jB
cnt = Counter({'foo': 1, 'bar': 2, 'baz': 3})
print(cnt) # Counter({'baz': 3, 'bar': 2, 'foo': 1})
# elements\bh
result = list(cnt.elements())
print(result) # ['foo', 'bar', 'bar', 'baz', 'baz', 'baz']
# most_common\bh
print(cnt.most_common(2)) # [('baz', 3), ('bar', 2)]
# subtract\bh
cnt.subtract(['foo', 'foo', 'bar'])
print(cnt) # Counter({'baz': 3, 'bar': 1, 'foo': -1})
# total\bh
print(cnt.total()) # 3
@±±ÅÍcntIuWFNgÍCounter({'baz': 3, 'bar': 2, 'foo': 1})ÆÈÁÄ¢Ü·BÅÉAelements\bhðÄÑoµÄ¾½Ce[^©çXgðì¬µÄ¢Ü·B±ÌÆ«A'foo'L[ÌlÍ1ÈÌÅAÊÌXgÉÍ'foo'ª1Â¾¯ÜÜêA¯lÉA'bar'Í2ÂA'baz'Í3ÂÜÜêÄ¢Ü·BXgÌvfð¦ã°½êÌtÏ·ðÅ«éÆl¦Äàæ¢Åµå¤Bmost_common\bhÉÍ2ðnµÄ¢Ü·B»Ì½ßAlª½¢vfð2ÂæèoµÄ(L[, l)Ì^vÆµÄA»êçðXgÉi[µ½àÌªÔ³êÄ¢Ü·B
@subtract\bhÉÍXgðnµÄ¢Ü·BXgÉÍ'foo'ª2ÂA'bar'ª1ÂÜÜêÄ¢éÌÅAcntIuWFNgÌ'foo'L[ÌlÍ2¾¯¸Z³êA'bar'L[ÌlÍ1¾¯¸Z³êÄ¢éÌªª©èÜ·ilàæêé±ÆÉÓjBÅãÌtotal\bhÅÍeL[ÌlðvµÄi'foo'L[ÌlÍ-1A'bar'L[ÌlÍ1A'baz'L[ÌlÍ3jA±±ÅÍ3ÆÈèÜµ½B
@Ü½A2ÂÌCounterIuWFNgÉÂ¢ÄWZðs¤==ZqA!=ZqÈÇàgpÅ«Ü·ªA±±ÅÍáÍÈªµÜ·B
@ÆÜ AXgi½Â\IuWFNgjÌvfð¦ã°½èA¦ã°½ÊðgÁÄ¿åÁÆµ½½©ðµ½è·é½ßÉÖÈ\bhªõíÁÄ¢éÌÅACounterNXÍºÐÆào¦Ä¨«Üµå¤B
@wðIPythonxÅàCounterNXðµÁ½LÍ éñÅ·ªA¡ñÌLÌûª¿åÁÆÚµ¢ÌÅA¦[cc³ÉÇÜÈÁÄàåävÅ·ccB
uPythonXebvAbvNCYv
SÒü¯Af[^ªÍEAIE@BwKEPythonÌ×û@@ITÌDeep InsiderÅwÚ¤
Copyright© Digital Advantage Corp. All Rights Reserved.