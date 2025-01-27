"use client";

import {
  CirclesIcon,
  EllipsesIcon,
  Squares1Icon,
  Squares2Icon,
  ChatsIcon,
  Logo,
} from "@/shared/icons";
import { HomeInfoWidget } from "./HomeInfoWidget";
import {
  PaginatedContainer,
  Paginator,
  usePaginator,
} from "@/shared/components";

export const HomeInfoWidgets = () => {
  const slideDurationMs = 5000;

  const { page, setPage, pages, setPages } = usePaginator({
    slideDurationMs: slideDurationMs,
    defaultPages: 6,
  });

  return (
    <div className="flex flex-col gap-6">
      <Paginator
        page={page}
        setPage={setPage}
        pages={pages}
        slideDurationMs={slideDurationMs}
      />

      <PaginatedContainer page={page} setPages={setPages}>
        <HomeInfoWidget
          Icon={CirclesIcon}
          title="Анализ текущего состояния карьеры"
          description="Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития."
        />
        <HomeInfoWidget
          Icon={Squares1Icon}
          title="Сопроводительные письма и резюме"
          description="Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов."
        />
        <HomeInfoWidget
          Icon={Squares2Icon}
          title="Поиск работы"
          description="Определим вашу карьерную цель и разработаем стратегию для трудоустройства."
        />
        <HomeInfoWidget
          Icon={EllipsesIcon}
          title="Тренинг по презентации личного бренда"
          description="Подсветим сильные стороны и грамотно выстроим самопрезентацию."
        />
        <HomeInfoWidget
          Icon={ChatsIcon}
          title="Тренинг по презентации личного бренда"
          description="Научим говорить о себе кратко, ярко и профессионально."
        />
        <HomeInfoWidget
          Icon={Logo}
          title="Рекомендация по базе STEMPS Career"
          description="Поможем встретиться соискателю и работодателю. "
        />
      </PaginatedContainer>
    </div>
  );
};
