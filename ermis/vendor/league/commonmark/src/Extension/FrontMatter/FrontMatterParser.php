<?php

declare(strict_types=1);

/*
 * This file is part of the league/commonmark package.
 *
 * (c) Colin O'Dell <colinodell@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace League\CommonMark\Extension\FrontMatter;

use League\CommonMark\Extension\FrontMatter\Data\FrontMatterDataParserInterface;
use League\CommonMark\Extension\FrontMatter\Input\MarkdownInputWithFrontMatter;
use League\CommonMark\Parser\Cursor;

final class FrontMatterParser implements FrontMatterParserInterface
{
    /** @psalm-readonly */
    private FrontMatterDataParserInterface $frontMatterParser;

<<<<<<< HEAD
    private const REGEX_FRONT_MATTER = '/^---\\n.*?\\n---\n/s';
=======
    private const REGEX_FRONT_MATTER = '/^---\\R.*?\\R---\\R/s';
>>>>>>> develop

    public function __construct(FrontMatterDataParserInterface $frontMatterParser)
    {
        $this->frontMatterParser = $frontMatterParser;
    }

    public function parse(string $markdownContent): MarkdownInputWithFrontMatter
    {
        $cursor = new Cursor($markdownContent);

        // Locate the front matter
        $frontMatter = $cursor->match(self::REGEX_FRONT_MATTER);
        if ($frontMatter === null) {
            return new MarkdownInputWithFrontMatter($markdownContent);
        }

<<<<<<< HEAD
        // Trim the last 4 characters (ending ---s and newline)
        $frontMatter = \substr($frontMatter, 0, -4);
=======
        // Trim the last line (ending ---s and newline)
        $frontMatter = \preg_replace('/---\R$/', '', $frontMatter);
        if ($frontMatter === null) {
            return new MarkdownInputWithFrontMatter($markdownContent);
        }
>>>>>>> develop

        // Parse the resulting YAML data
        $data = $this->frontMatterParser->parse($frontMatter);

        // Advance through any remaining newlines which separated the front matter from the Markdown text
<<<<<<< HEAD
        $trailingNewlines = $cursor->match('/^\n+/');

        // Calculate how many lines the Markdown is offset from the front matter by counting the number of newlines
        // Don't forget to add 1 because we stripped one out when trimming the trailing delims
        $lineOffset = \preg_match_all('/\n/', $frontMatter . $trailingNewlines) + 1;
=======
        $trailingNewlines = $cursor->match('/^\R+/');

        // Calculate how many lines the Markdown is offset from the front matter by counting the number of newlines
        // Don't forget to add 1 because we stripped one out when trimming the trailing delims
        $lineOffset = \preg_match_all('/\R/', $frontMatter . $trailingNewlines) + 1;
>>>>>>> develop

        return new MarkdownInputWithFrontMatter($cursor->getRemainder(), $lineOffset, $data);
    }
}
