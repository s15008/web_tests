<?php
$file = 'input.txt';
// ファイルをオープンして既存のコンテンツを取得します
$current = file_get_contents($file);
// 新しい人物をファイルに追加します
$current .= data;
// 結果をファイルに書き出します
file_put_contents($file, $current);
