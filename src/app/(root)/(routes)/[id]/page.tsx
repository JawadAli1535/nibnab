import React from 'react';
import { USECASEPAGES, IPageConsts } from '@/util/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateMeta, Props } from '@/util/meta';
import { UseCasePage } from '@/components/use-case-page';

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.id;
  const selectedUseCase = USECASEPAGES.find((useCase) =>
    useCase.link.includes(slug)
  );

  console.log('🚀 ~ selectedUseCase:', selectedUseCase);
  if (selectedUseCase === undefined) {
    throw new Error("Can't find use case page!");
  }

  return generateMeta(
    { params, searchParams },
    parent,
    selectedUseCase as IPageConsts
  );
}

const Index = () => {
  return <UseCasePage />;
};

export default Index;
