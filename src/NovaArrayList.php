<?php

    namespace Codetech\NovaArrayList;

    use Laravel\Nova\Fields\KeyValue;

    class NovaArrayList extends KeyValue
    {
        public $component = 'nova-array-list';

        protected int $tagLimit = 3;

        public function setTagLimit(int $limit = 10): self
        {
            $this->tagLimit = $limit;

            return $this;
        }

        public function jsonSerialize(): array
        {
            $data = parent::jsonSerialize();

            $data['tagLimit'] = $this->getTagLimit();

            return $data;
        }

        public function getTagLimit(): int
        {
            return $this->tagLimit;
        }
    }
